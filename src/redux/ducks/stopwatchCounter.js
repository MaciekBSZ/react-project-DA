const INCREMENT = 'add'
const DECREMENT = 'minus'
const START = 'start'
const RESET = 'zero'

export const add = () => ({
	type: INCREMENT,
})

export const minus = () => ({
	type: DECREMENT,
})
export const start = () => ({
	type: START,
})

export const zero = () => ({
	type: RESET,
})

const initialState = {
	count: 0,
}

const stopwatchCounter = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		case START:
			return { ...state, count: state.count }
		case RESET:
			return { ...state, count: (state.count = initialState.count) }
		default:
			return state
	}
}

export default stopwatchCounter
