import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus, addToStart, minusToStart, incrementByCount, zero } from '../redux/toolkit/reducer'
import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
const StopWatch = () => {
	const count = useSelector(state => state.counters.stopwatch.count)
	const startCount = useSelector(state => state.counters.stopwatch.start)
	const [timeOn, setTimeOn] = useState(false)
	const dispatch = useDispatch()
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
			<Typography>Zwiększ licznik o: {startCount}</Typography>
			<Typography>Stoper: {count}</Typography>
			<ButtonGroup variant='contained'>
				<Button onClick={() => dispatch(minus())}>Odejmij 1</Button>
				<Button onClick={() => dispatch(zero())}>Resetuj</Button>
				<Button onClick={() => dispatch(add())}>Dodaj 1</Button>
				<Button onClick={() => dispatch(addToStart())}>Dodaj do licznika {startCount}</Button>
				<Button onClick={() => dispatch(minusToStart())}>Odejmij do licznika </Button>
				<Button onClick={() => setTimeOn(timeOn => !timeOn)}>{!timeOn ? 'Start' : 'Stop'}</Button>
			</ButtonGroup>
		</>
	)
}

export default StopWatch
