export default function isPageChanged({
  operationType,
  currentPageNum,
  currentPage,
  pageSize,
  pagination,
}) {
  if (operationType === 'delete') {
    if (currentPageNum.value === 1 && currentPage.value > 1) {
      currentPage.value--
    }
  }
  if (operationType === 'pagechange') {
    // page change
    if (currentPage.value * pageSize.value > pagination.total) {
      currentPage.value = Math.ceil(pagination.total / pageSize.value)
    }
  }
  if (operationType === 'search') {
    // 对象 比较 是否 currentPage = 1
  }
  if (!operationType || operationType === 'noop' || operationType === 'edit') {
    // noop undefined edit 不改变页码信息
  }
  if (operationType === 'add') {
    // 自动 加页 或者 不做任何操作
    // if (
    //   currentPageNum.value === pageSize.value &&
    //   currentPage.value === Math.ceil(pagination.total / pagination.pageSize)
    // ) {
    //   currentPage.value++
    // }
  }
}
