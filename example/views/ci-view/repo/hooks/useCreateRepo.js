import { ref, watch } from 'vue'
import { addRepoApi, getClusterListApi } from '@example/api/ci-view.js'

export default function useCreateRepo(
  modalVisible,
  modalConfig,
  kkform,
  getPageData
) {
  const createRepoFormData = ref({
    user_name: 'admin',
    cluster_name: '',
    cluster: '',
    repo_name: '',
    repo: '',
    branch: '',
    // images: '',
    // build_path: '',
    // dockerfile: '',
  })
  const createRepoFormConfig = [
    {
      label: 'cluster_name',
      key: 'cluster_name',
      type: 'select',
      options: [],
      keys: {
        cluster_name: 'name',
        cluster: 'id',
      },
      remoteOptions: () => getClusterListApi(),
      remoteOptionsConfig: {
        label: 'name',
        value: 'id',
      },
      labelInValue: false,
    },
    {
      label: 'repo名称',
      key: 'repo_name',
      type: 'input',
    },
    {
      label: 'repo地址',
      key: 'repo',
      type: 'input',
    },
    {
      label: 'branch',
      key: 'branch',
      type: 'input',
    },
  ]

  const createRepoRules = {
    cluster_name: [
      {
        type: 'string',
        required: true,
        message: '请选择cluster_name',
        trigger: 'change',
      },
    ],
    repo_name: [
      {
        required: true,
        message: '请输入repo名称',
        trigger: 'blur',
      },
    ],
    repo: [
      {
        required: true,
        message: '请输入repo地址',
        trigger: 'blur',
      },
    ],
    images: [
      {
        required: true,
        message: '请输入镜像地址',
        trigger: 'blur',
      },
    ],
    branch: [
      {
        required: true,
        message: '请输入branch',
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
    dockerfile: [
      {
        required: true,
        message: '请输入dockerfile',
        trigger: 'blur',
      },
    ],
  }

  const catchSelected = ({ value, option, item }) => {
    Object.keys(item.keys).forEach((key) => {
      createRepoFormData.value[key] =
        option.value === value ? option[item.keys[key]] : ''
    })
  }

  const submit = () => {
    kkform.value.form.validate().then(() => {
      modalConfig.loading = true
      modalConfig.spin.spinning = true
      addRepoApi(createRepoFormData.value).then(() => {
        modalVisible.value = false
        modalConfig.loading = false
        modalConfig.spin.spinning = false
        getPageData('add')
      })
    })
  }

  watch(modalVisible, (cur) => {
    if (!cur) {
      createRepoFormData.value.cluster = ''
      createRepoFormData.value.cluster_name = ''
      createRepoFormData.value.repo_name = ''
      createRepoFormData.value.repo = ''
      createRepoFormData.value.branch = ''
      createRepoFormData.value.images = ''
      createRepoFormData.value.build_path = ''
      createRepoFormData.value.dockerfile = ''

      modalConfig.loading = false
    }
  })

  const handleAddRepo = () => {
    modalVisible.value = true
    modalConfig.title = '新增Repo'
    modalConfig.type = 'addRepo'
    modalConfig.showFooter = true
    modalConfig.submit = submit
    modalConfig.spin.tip = '新增repo中...'
  }

  return {
    createRepoFormData,
    handleAddRepo,
    createRepoFormConfig,
    createRepoRules,
    catchSelected,
  }
}
