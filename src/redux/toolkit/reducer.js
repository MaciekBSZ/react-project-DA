import { combineReducers, createSlice } from '@reduxjs/toolkit'

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
		seconds: 0,
		minutes: 0,
		start: 1,
	},
	reducers: {
		add: state => {
			state.seconds++
		},
		minus: state => {
			state.seconds--
		},
		addToStart: state => {
			state.start++
		},
		minusToStart: state => {
			state.start--
		},
		incrementByCount: state => {
			state.seconds += state.start
		},
		addMinutes: state => {
			state.minutes++
			state.seconds = 0
		},
		zero: state => {
			state.seconds = 0
			state.start = 1
			state.minutes = 0
		},
	},
})

const counterReducer = combineReducers({
	pageCounter: pageSlice.reducer,
	counter: counterSlice.reducer,
	stopwatch: stopwatchSlice.reducer,
})
export default counterReducer
export const { add, minus, addToStart, minusToStart, incrementByCount, zero, addMinutes, addMiliseconds } = stopwatchSlice.actions
export const { increment, decrement, reset } = counterSlice.actions
export const { addPage, decPage, firstPage } = pageSlice.actions
