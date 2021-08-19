import { combineReducers, createSlice } from '@reduxjs/toolkit'

// const initialState = { count: 0, start: 1, page: 1 }

const pageSlice = createSlice({
	name: 'pageCounter',
	initialState: {
		page: 1,
	},
	reducers: {
		addPage: state => {
			state.page++
		},
		decPage: state => {
			state.page--
		},
		firstPage: state => {
			state.page = 1
		},
	},
})

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: state => {
			state.count++
		},
		decrement: state => {
			state.count--
		},
		reset: state => {
			state.count = 0
		},
	},
})
const stopwatchSlice = createSlice({
	name: 'stopwatch',
	initialState: {
		count: 0,
		start: 1,
	},
	reducers: {
		add: state => {
			state.count++
		},
		minus: state => {
			state.count--
		},
		addToStart: state => {
			state.start++
		},
		minusToStart: state => {
			state.start--
		},
		incrementByCount: state => {
			state.count += state.start
		},
		zero: state => {
			state.count = 0
			state.start = 1
		},
	},
})

const counterReducer = combineReducers({
	pageCounter: pageSlice.reducer,
	counter: counterSlice.reducer,
	stopwatch: stopwatchSlice.reducer,
})
export default counterReducer
export const { add, minus, addToStart, minusToStart, incrementByCount, zero } = stopwatchSlice.actions
export const { increment, decrement, reset } = counterSlice.actions
export const { addPage, decPage, firstPage } = pageSlice.actions
