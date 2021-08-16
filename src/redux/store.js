import { createStore } from 'redux'
import reducer from './toolkit/reducer'
const store = createStore(reducer)
export default store
