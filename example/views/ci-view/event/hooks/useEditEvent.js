import { ref } from 'vue'
import { editEventApi } from '@example/api/ci-view.js'

export default function useEditEvent(
  modalVisible,
  modalConfig,
  kkform,
  getPageData
) {
  const editEventFormData = ref({
    namespace: '',
    resource_name: '',
    resource_type: '',
    user_name: '',
    cluster_name: '',
    repo_name: '',
    name: '',
    type: '',
    image: '',
    image_tag: '',
    desc: '',
    event_repo: '',
    build_path: '',
    docker_file: '',
  })
  const editEventFormConfig = [
    {
      label: 'namespace',
      key: 'namespace',
      type: 'input',
    },
    {
      label: 'resource_name',
      key: 'resource_name',
      type: 'input',
    },
    {
      label: 'resource_type',
      key: 'resource_type',
      type: 'input',
    },
    {
      label: 'name',
      key: 'name',
      type: 'input',
    },
    {
      label: 'image',
      key: 'image',
      type: 'input',
    },
    {
      label: 'build_path',
      key: 'build_path',
      type: 'input',
    },
    {
      label: 'docker_file',
      key: 'docker_file',
      type: 'input',
    },

    {
      label: 'desc',
      key: 'desc',
      type: 'input',
    },
  ]

  const validateName = async (rule, value) => {
    const pattern = /^[^_]+$/g
    if (!value.trim()) {
      return Promise.reject(new Error('请输入name'))
    }
    if (!pattern.test(value.trim())) {
      return Promise.reject(new Error('不能包含下划线'))
    } else {
      return Promise.resolve()
    }
  }

  const editEventRules = {
    name: [
      {
        required: true,
        validator: validateName,
        trigger: 'blur',
      },
    ],
    type: [
      {
        required: false,
        message: '请输入type',
        trigger: 'blur',
      },
    ],
    image: [
      {
        required: true,
        message: '请输入image',
        trigger: 'blur',
      },
    ],
    image_tag: [
      {
        required: false,
        message: '请输入image_tag',
        trigger: 'blur',
      },
    ],
    desc: [
      {
        required: false,
        message: '请输入desc',
        trigger: 'blur',
      },
    ],
    build_path: [
      {
        required: false,
        message: '请输入build_path',
        trigger: 'blur',
      },
    ],
    docker_file: [
      {
        required: true,
        message: '请输入docker_file',
        trigger: 'blur',
      },
    ],
  }

  const submit = (id) => {
    kkform.value.form.validate().then(() => {
      modalConfig.loading = true
      modalConfig.spin.spinning = true
      editEventApi({ id, data: editEventFormData.value }).then(() => {
        modalConfig.loading = false
        modalConfig.spin.spinning = false
        modalVisible.value = false
        getPageData('edit')
      })
    })
  }

  const handleEditEvent = (record) => {
    const {
      namespace,
      resource_name,
      resource_type,
      user_name,
      cluster_name,
      repo_name,
      name,
      type,
      image,
      image_tag,
      desc,
      event_repo,
      build_path,
      docker_file,
      id,
    } = record

    modalVisible.value = true
    modalConfig.title = '编辑RepoEvent'
    modalConfig.type = 'editRepoEvent'
    modalConfig.showFooter = true
    modalConfig.submit = () => submit(id)
    modalConfig.spin.tip = '编辑event中...'

    editEventFormData.value.namespace = namespace
    editEventFormData.value.resource_name = resource_name
    editEventFormData.value.resource_type = resource_type
    // 只是带数据，不在ui中展示 ->
    editEventFormData.value.user_name = user_name
    editEventFormData.value.cluster_name = cluster_name
    editEventFormData.value.repo_name = repo_name
    // <-
    editEventFormData.value.name = name
    editEventFormData.value.type = type
    editEventFormData.value.image = image
    editEventFormData.value.image_tag = image_tag
    editEventFormData.value.desc = desc
    // 只是带数据，不在ui中展示 ->
    editEventFormData.value.event_repo = event_repo
    // <-
    editEventFormData.value.build_path = build_path
    editEventFormData.value.docker_file = docker_file
  }
  return {
    handleEditEvent,
    editEventFormData,
    editEventFormConfig,
    editEventRules,
  }
}
