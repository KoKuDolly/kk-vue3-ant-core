import KK from '@/'

import app from './modules/app.js'
import sample from './modules/sample.js'

const module = {
  app,
  sample,
}

export default KK.store(module)
