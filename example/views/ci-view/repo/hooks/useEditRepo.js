import { ref } from 'vue'
import { editRepoApi } from '@example/api/ci-view.js'

export default function useEditRepo(
  modalVisible,
  modalConfig,
  kkform,
  getPageData
) {
  const editRepoFormData = ref({
    user_name: '',
    cluster_name: '',
    cluster: '',
    repo_name: '',
    repo: '',
    branch: '',
  })

  const editRepoFormConfig = [
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

  const editRepoRules = {
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
    branch: [
      {
        required: true,
        message: '请输入branch',
        trigger: 'blur',
      },
    ],
  }

  const submit = (id) => {
    kkform.value.form.validate().then(() => {
      modalConfig.loading = true
      modalConfig.spin.spinning = true
      editRepoApi({ id, data: editRepoFormData.value }).then(() => {
        modalConfig.loading = false
        modalConfig.spin.spinning = false
        modalVisible.value = false
        getPageData('edit')
      })
    })
  }

  const handleEditRepo = (record) => {
    console.log(record)

    const { user_name, cluster_name, cluster, repo_name, repo, branch, id } =
      record

    modalVisible.value = true
    modalConfig.title = '编辑Repo'
    modalConfig.type = 'editRepo'
    modalConfig.showFooter = true
    modalConfig.submit = () => submit(id)
    modalConfig.spin.tip = '编辑repo中...'

    // 只是带数据，不在ui中展示 ->
    editRepoFormData.value.user_name = user_name
    editRepoFormData.value.cluster_name = cluster_name
    editRepoFormData.value.cluster = cluster
    // <-
    editRepoFormData.value.repo_name = repo_name
    editRepoFormData.value.repo = repo
    editRepoFormData.value.branch = branch
  }
  return {
    handleEditRepo,
    editRepoFormData,
    editRepoFormConfig,
    editRepoRules,
  }
}
