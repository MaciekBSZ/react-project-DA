import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0, start: 1, page: 1 }

const pageSlice = createSlice({
	name: 'pageCounter',
	initialState,
	reducers: {
		addPage(state) {
			state.page++
		},
		decPage(state) {
			state.page--
		},
		firstPage(state) {
			state.page = initialState.page
		},
	},
})

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		},
		reset(state) {
			state.count = initialState.count
		},
	},
})
const stopwatchSlice = createSlice({
	name: 'stopwatch',
	initialState,
	reducers: {
		add(state) {
			state.count++
		},
		minus(state) {
			state.count--
		},
		addToStart(state) {
			state.start++
		},
		minusToStart(state) {
			state.start--
		},
		incrementByCount(state) {
			state.count += state.start
		},
		zero(state) {
			state.count = initialState.count
			state.start = initialState.start
		},
	},
})

const reducer = combineReducers({
	pageCounter: pageSlice.reducer,
	counter: counterSlice.reducer,
	stopwatch: stopwatchSlice.reducer,
})
export default reducer
export const { add, minus, addToStart, minusToStart, incrementByCount, zero } = stopwatchSlice.actions
export const { increment, decrement, reset } = counterSlice.actions
export const { addPage, decPage, firstPage } = pageSlice.actions
