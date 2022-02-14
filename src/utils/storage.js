export const setSessionStorage = (key = '', value = '') => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSessionStorage = (key) => {
  const rst = sessionStorage.getItem(key)
  if (rst === void 0 || rst === 'undefined' || rst === null) {
    return ''
  } else {
    return JSON.parse(rst)
  }
}

export const removeSessionStorage = (key = '') => {
  sessionStorage.removeItem(key)
}
export const clearSessionStorage = () => {
  sessionStorage.clear()
}

export const setlocalStorage = (key = '', value = '') => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getlocalStorage = (key) => {
  const rst = localStorage.getItem(key)
  if (rst === void 0 || rst === 'undefined' || rst === null) {
    return ''
  } else {
    return JSON.parse(rst)
  }
}

export const removelocalStorage = (key = '') => {
  localStorage.removeItem(key)
}
export const clearlocalStorage = () => {
  localStorage.clear()
}

export default {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
  setlocalStorage,
  getlocalStorage,
  removelocalStorage,
  clearlocalStorage,
}
