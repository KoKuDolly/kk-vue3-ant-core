import { ref } from 'vue'
import { editEventApi } from '@example/api/ci-view.js'
import { message } from 'ant-design-vue'

export default function useEditEvent(
  modalVisible,
  modalConfig,
  kkform,
  getPageData
) {
  const editEventFormData = ref({
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
      label: 'name',
      key: 'name',
    },
    {
      label: 'type',
      key: 'type',
    },
    {
      label: 'image',
      key: 'image',
    },
    {
      label: 'image_tag',
      key: 'image_tag',
    },
    {
      label: 'desc',
      key: 'desc',
    },
    {
      label: 'build_path',
      key: 'build_path',
    },
    {
      label: 'docker_file',
      key: 'docker_file',
    },
  ]

  const editEventRules = {
    name: [
      {
        required: true,
        message: '请输入name',
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
        required: true,
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

  const submit = (event_repo) => {
    kkform.value.form
      .validate()
      .then(() => {
        editEventApi({ id: event_repo, data: editEventFormData.value })
          .then((res) => {
            modalVisible.value = false
            message.success(res.data.msg || '编辑成功')
            getPageData()
          })
          .catch((error) => {
            message.error(error.message || 'error')
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleEditEvent = (record) => {
    const {
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
    } = record

    modalVisible.value = true
    modalConfig.title = '编辑RepoEvent'
    modalConfig.type = 'editRepoEvent'
    modalConfig.showFooter = true
    modalConfig.submit = () => submit(event_repo)

    editEventFormData.value.user_name = user_name
    editEventFormData.value.cluster_name = cluster_name
    editEventFormData.value.repo_name = repo_name
    editEventFormData.value.name = name
    editEventFormData.value.type = type
    editEventFormData.value.image = image
    editEventFormData.value.image_tag = image_tag
    editEventFormData.value.desc = desc
    editEventFormData.value.event_repo = event_repo
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
