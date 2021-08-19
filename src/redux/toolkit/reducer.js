import { combineReducers, createSlice } from '@reduxjs/toolkit'
import InfoIcon from '@material-ui/icons/Info'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import AvTimerIcon from '@material-ui/icons/AvTimer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import TimerIcon from '@material-ui/icons/Timer'
import DoneIcon from '@material-ui/icons/Done'

const initialState = { count: 0, start: 1, page: 1 }

const pageSlice = createSlice({
	name: 'pageCounter',
	initialState,
	reducers: {
		addPage: state => {
			state.page++
		},
		decPage: state => {
			state.page--
		},
		firstPage: state => {
			state.page = initialState.page
		},
	},
})

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.count++
		},
		decrement: state => {
			state.count--
		},
		reset: state => {
			state.count = initialState.count
		},
	},
})
const stopwatchSlice = createSlice({
	name: 'stopwatch',
	initialState,
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
			state.count = initialState.count
			state.start = initialState.page
		},
	},
})
const filtersSlice = createSlice({
	name: 'filterSlice',
	initialState: [
		{ id: 1, value: ``, title: 'Bez filtru' },
		{ id: 2, value: `&status=alive`, title: 'Żywy' },
		{ id: 3, value: `&status=dead`, title: 'Martwy' },
		{ id: 4, value: `&status=unknown`, title: 'Nieznany' },
	],
})
const mainPageCardsSlice = createSlice({
	name: 'mainPageCards',
	initialState: [
		{ id: 1, title: 'O mnie', path: '/aboutme', text: 'Strona z opisem', icon: <InfoIcon /> },
		{ id: 2, title: 'Lista Postaci', path: '/charlist', text: 'Lista postaci z kreskówki Rick and Morty', icon: <EmojiPeopleIcon /> },
		{ id: 3, title: 'Licznik', path: '/clicker', text: 'Prosty licznik', icon: <AvTimerIcon /> },
		{ id: 4, title: 'Strona logowania', path: '/loginpage', text: 'Strona logowania', icon: <ExitToAppIcon /> },
		{ id: 5, title: 'Stoper', path: '/stopwatch', text: 'Stoper', icon: <TimerIcon /> },
		{ id: 6, title: 'Rejestracja', path: '/registerpage', text: 'Strona rejestracji', icon: <DoneIcon /> },
	],
})

const reducer = combineReducers({
	cards: mainPageCardsSlice.reducer,
	filters: filtersSlice.reducer,
	pageCounter: pageSlice.reducer,
	counter: counterSlice.reducer,
	stopwatch: stopwatchSlice.reducer,
})
export default reducer
export const { add, minus, addToStart, minusToStart, incrementByCount, zero } = stopwatchSlice.actions
export const { increment, decrement, reset } = counterSlice.actions
export const { addPage, decPage, firstPage } = pageSlice.actions
