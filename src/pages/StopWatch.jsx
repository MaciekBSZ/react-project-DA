import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, add, zero, start } from '../redux/ducks/stopwatchCounter'
const StopWatch = () => {
	const count = useSelector(state => state.stopwatchCounter.count)
	const dispatch = useDispatch()
	const handleIncrement = () => {
		dispatch(add())
	}
	const handleDecrement = () => {
		dispatch(minus())
	}
	const handleReset = () => {
		dispatch(zero())
	}
	const handleStart = () => {
		dispatch(start())
	}
	return (
		<>
			<h2>Licznik: {count}</h2>
			<button onClick={handleDecrement}>Odejmij 1</button>
			<button onClick={handleReset}>Resetuj</button>
			<button onClick={handleIncrement}>Dodaj 1</button>
			<button onClick={handleStart}>Dodaj 10</button>
		</>
	)
}

export default StopWatch
