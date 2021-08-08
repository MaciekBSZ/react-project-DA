import { combineReducers, createStore } from 'redux'
import counter from './ducks/counter'

const reducer = combineReducers({
	counter,
})

const store = createStore(reducer)

export default store
