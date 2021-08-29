import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus, addToStart, minusToStart, incrementByCount, zero } from '../redux/toolkit/reducer'
import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import StopwatchBG from '../img/StopwatchBG.jpg'
import styled from 'styled-components'
const Container = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${StopwatchBG});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
	box-shadow: 7px 8px 10px grey;
`
const Text = styled(Typography)`
	& {
		font-size: 30px;
		color: wheat;
	}
`

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
		<Container>
			<Text>Zwiększ licznik o: {startCount}</Text>
			<Text>Stoper: {count}</Text>
			<ButtonGroup variant='contained'>
				<Button onClick={() => dispatch(minus())}>Odejmij 1</Button>
				<Button onClick={() => dispatch(zero())}>Resetuj</Button>
				<Button onClick={() => dispatch(add())}>Dodaj 1</Button>
				<Button onClick={() => dispatch(addToStart())}>Dodaj do licznika {startCount}</Button>
				<Button onClick={() => dispatch(minusToStart())}>Odejmij do licznika </Button>
				<Button onClick={() => setTimeOn(timeOn => !timeOn)}>{!timeOn ? 'Start' : 'Stop'}</Button>
			</ButtonGroup>
		</Container>
	)
}

export default StopWatch
