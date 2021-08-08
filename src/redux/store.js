import { combineReducers, createStore } from 'redux'
import counter from './ducks/counter'
import stopwatchCounter from './ducks/stopwatchCounter'

const reducer = combineReducers({
	counter,
	stopwatchCounter,
})

const store = createStore(reducer)
console.log(store)

export default store
