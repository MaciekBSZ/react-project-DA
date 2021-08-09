import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus, addstart, minusstart, zero, incrementplusaddstart } from '../redux/ducks/stopwatchCounter'
import { useEffect, useState } from 'react'
const StopWatch = () => {
	const count = useSelector(state => state.stopwatchCounter.count)
	const startCount = useSelector(state => state.stopwatchCounter.start)
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
				dispatch(incrementplusaddstart())
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
			<button onClick={() => dispatch(plus())}>Dodaj 1</button>
			<button onClick={() => dispatch(addstart())}>Dodaj do licznika {startCount}</button>
			<button onClick={() => dispatch(minusstart())}>Odejmij do licznika </button>
			<button onClick={handleTime}>{timeOn === false ? <p>Start</p> : <p>Stop</p>}</button>
		</>
	)
}

export default StopWatch
