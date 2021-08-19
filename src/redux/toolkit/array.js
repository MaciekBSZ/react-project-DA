import { combineReducers, createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
	name: 'filterSlice',
	initialState: [
		{ id: 1, value: ``, title: 'Bez filtru' },
		{ id: 2, value: `&status=alive`, title: 'Żywy' },
		{ id: 3, value: `&status=dead`, title: 'Martwy' },
		{ id: 4, value: `&status=unknown`, title: 'Nieznany' },
	],
})

const navBarButtonsSlice = createSlice({
	name: 'navBarButtons',
	initialState: [
		{ id: 1, name: 'Strona główna', path: '/' },
		{ id: 2, name: 'O mnie', path: '/aboutme' },
		{ id: 3, name: 'Lista postaci', path: '/charlist' },
		{ id: 4, name: 'Licznik', path: '/clicker' },
		{ id: 5, name: 'Panel logowania', path: '/loginpage' },
		{ id: 6, name: 'Stoper', path: '/stopwatch' },
		{ id: 7, name: 'Strona rejestracji', path: '/registerpage' },
	],
})

const arraysReducer = combineReducers({
	navBarButtons: navBarButtonsSlice.reducer,
	filters: filtersSlice.reducer,
})
export default arraysReducer
