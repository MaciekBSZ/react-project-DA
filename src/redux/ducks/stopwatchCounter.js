const INCREMENT = 'plus'
const DECREMENT = 'minus'
const ADDSTART = 'addstart'
const MINUSSTART = 'minusstart'
const INCREMENTPLUSADDSTART = 'incrementplusaddstart'
const RESET = 'zero'

export const plus = () => ({
	type: INCREMENT,
})
export const incrementplusaddstart = () => ({
	type: INCREMENTPLUSADDSTART,
})
export const minus = () => ({
	type: DECREMENT,
})
export const addstart = () => ({
	type: ADDSTART,
})
export const minusstart = () => ({
	type: MINUSSTART,
})

export const zero = () => ({
	type: RESET,
})

const initialState = {
	count: 0,
	start: 0,
}

const stopwatchCounter = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case INCREMENTPLUSADDSTART:
			return { ...state, count: state.count + state.start }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		case ADDSTART:
			return { ...state, start: state.start + 1 }
		case MINUSSTART:
			return { ...state, start: state.start - 1 }
		case RESET:
			return { ...state, count: (state.count = initialState.count), start: (state.start = initialState.start) }
		default:
			return state
	}
}

export default stopwatchCounter
