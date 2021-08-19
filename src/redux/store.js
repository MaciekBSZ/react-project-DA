import { configureStore } from '@reduxjs/toolkit'
import arraysReducer from './toolkit/array'
import counterReducer from './toolkit/reducer'
export default configureStore({
	reducer: {
		arrays: arraysReducer,
		counters: counterReducer,
	},
})

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
