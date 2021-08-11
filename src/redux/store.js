import { createStore } from 'redux'
// import counter from './ducks/counter'
import reducer from './toolkit/reducer'
// import stopwatchCounter from './ducks/stopwatchCounter'

const store = createStore(reducer)
export default store
