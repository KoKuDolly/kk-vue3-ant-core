import REPO from './maps/repo.js'
import EVENT from './maps/event.js'
import CI from './maps/ci.js'
import CD from './maps/cd.js'

export default { ...REPO, ...EVENT, ...CI, ...CD }
