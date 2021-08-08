const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

export const increment = () => ({
	type: INCREMENT,
})

export const decrement = () => ({
	type: DECREMENT,
})

export const reset = () => ({
	type: RESET,
})

const initialState = {
	count: 0,
}

const counter = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		case RESET:
			return { ...state, count: (state.count = initialState.count) }
		default:
			return state
	}
}

export default counter
