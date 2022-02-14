import { ref } from 'vue'
export default function useCheckRepo(modalVisible, modalConfig) {
  const checkRepoFormData = ref({
    repo_name: '',
    repo: '',
    branch: '',
    images: '',
    build_path: '',
    dockerfile: '',
  })
  const checkRepoConfig = [
    {
      label: 'repo名称',
      key: 'repo_name',
    },
    {
      label: 'repo地址',
      key: 'repo',
    },
    {
      label: 'branch',
      key: 'branch',
    },
  ]
  const handleCheck = (record) => {
    modalVisible.value = true
    modalConfig.title = '查看'
    modalConfig.type = 'checkRepo'
    modalConfig.showFooter = false

    const { repo_name, repo, branch, images, build_path, dockerfile } = record
    checkRepoFormData.value.repo_name = repo_name
    checkRepoFormData.value.repo = repo
    checkRepoFormData.value.branch = branch
    checkRepoFormData.value.images = images
    checkRepoFormData.value.build_path = build_path
    checkRepoFormData.value.dockerfile = dockerfile
  }
  return { checkRepoFormData, checkRepoConfig, handleCheck }
}
