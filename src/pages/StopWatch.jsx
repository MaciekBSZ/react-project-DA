import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { minus, plus, addstart, minusstart, zero, incrementplusaddstart } from '../redux/ducks/stopwatchCounter'
import { add, minus, addToStart, minusToStart, incrementByCount, zero } from '../redux/toolkit/reducer'
import { useEffect, useState } from 'react'
const StopWatch = () => {
	const count = useSelector(state => state.stopwatch.count)
	const startCount = useSelector(state => state.stopwatch.start)
	const [timeOn, setTimeOn] = useState(false)
	const dispatch = useDispatch()
	const handleTime = () => {
		if (!timeOn) {
			setTimeOn(true)
		} else {
			setTimeOn(false)
		}
	}
	useEffect(() => {
		let interval = { startCount }
		if (timeOn) {
			interval = setInterval(() => {
				dispatch(incrementByCount())
			}, 1000)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [timeOn, startCount, dispatch])

	return (
		<>
			<h2>Zwiększ licznik o: {startCount}</h2>
			<h2>Stoper: {count}</h2>
			<button onClick={() => dispatch(minus())}>Odejmij 1</button>
			<button onClick={() => dispatch(zero())}>Resetuj</button>
			<button onClick={() => dispatch(add())}>Dodaj 1</button>
			<button onClick={() => dispatch(addToStart())}>Dodaj do licznika {startCount}</button>
			<button onClick={() => dispatch(minusToStart())}>Odejmij do licznika </button>
			<button onClick={handleTime}>{timeOn === false ? <p>Start</p> : <p>Stop</p>}</button>
		</>
	)
}

export default StopWatch
