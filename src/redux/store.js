import { configureStore } from '@reduxjs/toolkit'
import arraysReducer from './toolkit/array'
import counterReducer from './toolkit/reducer'
import registerReducer from './toolkit/register'
export default configureStore({
	reducer: {
		registers: registerReducer,
		arrays: arraysReducer,
		counters: counterReducer,
	},
})

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
