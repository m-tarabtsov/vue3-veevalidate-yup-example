import { createLogger, createStore } from 'vuex'

import { useAccessor } from 'typed-vuex'

const storePattern = {
  modules: {}
}

export const store = createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  ...storePattern
})

export const accessor = useAccessor(store, storePattern)
