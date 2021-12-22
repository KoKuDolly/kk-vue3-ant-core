import { ref, watch } from 'vue'
import { addEventApi } from '@example/api/ci-view.js'

export default function useCreateEvent(modalVisible, modalConfig, kkform) {
  const createEventFormData = ref({
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
  const createEventFormConfig = [
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

  const createEventRules = {
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

  const submit = () => {
    kkform.value.form
      .validate()
      .then(() => {
        addEventApi({ data: createEventFormData.value })
          .then(() => {
            modalVisible.value = false
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleAddEvent = (record) => {
    modalVisible.value = true
    modalConfig.title = '新增RepoEvent'
    modalConfig.type = 'addRepoEvent'
    modalConfig.showFooter = true
    modalConfig.submit = submit
    const { user_name, cluster_name, id, repo_name } = record
    createEventFormData.value.user_name = user_name
    createEventFormData.value.cluster_name = cluster_name
    createEventFormData.value.repo_name = repo_name
    createEventFormData.value.event_repo = id
  }

  watch(modalVisible, (cur) => {
    if (!cur) {
      createEventFormData.value.name = ''
      createEventFormData.value.type = ''
      createEventFormData.value.image = ''
      createEventFormData.value.image_tag = ''
      createEventFormData.value.desc = ''
      createEventFormData.value.build_path = ''
      createEventFormData.value.docker_file = ''
    }
  })

  return {
    handleAddEvent,
    createEventFormData,
    createEventFormConfig,
    createEventRules,
  }
}
