import { ref } from 'vue'
export default function useCheckEvent(modalVisible, modalConfig) {
  const checkEventFormData = ref({
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
  const checkEventConfig = [
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
  const handleCheckEvent = (record) => {
    modalVisible.value = true
    modalConfig.title = '查看Event'
    modalConfig.type = 'checkRepoEvent'
    modalConfig.showFooter = false

    const {
      user_name,
      cluster_name,
      repo_name,
      name,
      type,
      image,
      image_tag,
      desc,
      id,
      build_path,
      docker_file,
    } = record
    checkEventFormData.value.user_name = user_name
    checkEventFormData.value.cluster_name = cluster_name
    checkEventFormData.value.repo_name = repo_name
    checkEventFormData.value.name = name
    checkEventFormData.value.type = type
    checkEventFormData.value.image = image
    checkEventFormData.value.image_tag = image_tag
    checkEventFormData.value.desc = desc
    checkEventFormData.value.event_repo = id
    checkEventFormData.value.build_path = build_path
    checkEventFormData.value.docker_file = docker_file
  }
  return { checkEventFormData, checkEventConfig, handleCheckEvent }
}
