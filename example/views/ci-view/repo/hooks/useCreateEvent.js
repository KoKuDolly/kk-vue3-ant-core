import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { addEventApi } from '@example/api/ci-view.js'
import { responseCodeSuccessOrFailed } from '@/plugins/responseCodeFilter.js'
import authMap from '@example/utils/authMap'

export default function useCreateEvent(modalVisible, modalConfig, kkform) {
  const createEventFormData = ref({
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

  const createEventFormConfig = [
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

  const createEventRules = {
    namespace: [
      { required: true, message: '请输入namespace', trigger: 'blur' },
    ],
    name: [{ required: true, validator: validateName, trigger: 'blur' }],
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

  const router = useRouter()
  const submit = () => {
    kkform.value.form.validate().then(() => {
      modalConfig.loading = true
      modalConfig.spin.spinning = true
      addEventApi({ data: createEventFormData.value }).then((res) => {
        modalVisible.value = false
        modalConfig.loading = false
        modalConfig.spin.spinning = false
        if (responseCodeSuccessOrFailed(res) !== 1)
          router.push({ name: authMap.EVENT.name })
      })
    })
  }

  const handleAddEvent = (record) => {
    modalVisible.value = true
    modalConfig.title = '新增RepoEvent'
    modalConfig.type = 'addRepoEvent'
    modalConfig.showFooter = true
    modalConfig.submit = submit
    modalConfig.spin.tip = '新增event中...'
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

      modalConfig.loading = false
      modalConfig.spin.spinning = false
    }
  })

  return {
    handleAddEvent,
    createEventFormData,
    createEventFormConfig,
    createEventRules,
  }
}
