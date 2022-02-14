import { deleteCIApi } from '@example/api/ci-view.js'

export default function useDelete(getPageData) {
  const handleDeleteCI = (record) => {
    const { id } = record
    deleteCIApi({ id }).then(() => {
      getPageData('delete')
    })
  }

  return {
    handleDeleteCI,
  }
}
