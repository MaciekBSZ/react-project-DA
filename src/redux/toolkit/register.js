import { createSlice, combineReducers } from '@reduxjs/toolkit'

const registerSlice = createSlice({
	name: 'registerData',
	initialState: [],
	reducers: {
		addUser: (state, action) => {
			const newUser = {
				id: Date.now(),
				name: action.payload.name,
				lastName: action.payload.lastName,
				email: action.payload.email,
				password: action.payload.password,
			}
			state.push(newUser)
		},
	},
})
const registerCheckSlice = createSlice({
	name: 'registerCheck',
	initialState: {
		name: false,
		lastName: false,
		password: false,
		email: false,
	},
	reducers: {
		correctName: (state, action) => {
			state.name = action.payload
		},
		correctLastName: (state, action) => {
			state.lastName = action.payload
		},
		correctPassword: (state, action) => {
			state.password = action.payload
		},
		correctEmail: (state, action) => {
			state.email = action.payload
		},
		resetCheck: state => {
			state.name = false
			state.lastName = false
			state.password = false
			state.email = false
		},
	},
})
const emailDomains = createSlice({
	name: 'emailDomains',
	initialState: ['.com', '.pl', 'org'],
})

const registerReducer = combineReducers({
	registerEmailDomains: emailDomains.reducer,
	registerData: registerSlice.reducer,
	registerCheck: registerCheckSlice.reducer,
})

export const { correctName, correctEmail, correctLastName, correctPassword, resetCheck } = registerCheckSlice.actions
export const { addUser } = registerSlice.actions
export default registerReducer
