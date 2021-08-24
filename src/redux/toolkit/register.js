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
const registerErrorSlice = createSlice({
	name: 'registerErrors',
	initialState: {
		name: false,
		lastName: false,
		password: false,
		email: false,
	},
	reducers: {
		correctName: state => {
			state.name = true
		},
		correctLastName: state => {
			state.lastName = true
		},
		correctPassword: state => {
			state.password = true
		},
		correctEmail: (state, action) => {
			state.email = action.payload
		},
		resetErrrors: state => {
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
	registerError: registerErrorSlice.reducer,
})

export const { correctName, correctEmail, correctLastName, correctPassword } = registerErrorSlice.actions
export const { addUser } = registerSlice.actions
export default registerReducer
