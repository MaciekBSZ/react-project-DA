import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus, addToStart, minusToStart, incrementByCount, zero, addMinutes } from '../redux/toolkit/reducer'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import styled from 'styled-components'
import StopwatchBG from '../img/StopwatchBG.jpg'
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
const StartStopButton = styled(Button)`
	& {
		background-color: ${props => props.bgcolor};
		margin-bottom: 5px;
		&:hover {
			background-color: yellow;
		}
	}
`
const Text = styled(Typography)`
	& {
		font-size: 30px;
		color: wheat;
	}
`
const StopwatchDisplay = styled.div`
	display: flex;
`

const StopWatch = () => {
	const seconds = useSelector(state => state.counters.stopwatch.seconds)
	const minutes = useSelector(state => state.counters.stopwatch.minutes)
	const startCount = useSelector(state => state.counters.stopwatch.start)
	const [timeOn, setTimeOn] = useState(false)
	const [buttonColor, setButtonColor] = useState('yellowgreen')
	const dispatch = useDispatch()
	useEffect(() => {
		let interval = { startCount }
		if (timeOn) {
			interval = setInterval(() => {
				dispatch(incrementByCount())
				if (seconds === 59 || seconds > 59) {
					dispatch(addMinutes())
				}
			}, 1000)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [timeOn, startCount, dispatch, seconds])

	const handleStartCountButton = () => {
		setTimeOn(timeOn => !timeOn)
		if (buttonColor === 'yellowgreen') {
			setButtonColor('tomato')
		} else {
			setButtonColor('yellowgreen')
		}
	}
	return (
		<Container>
			<Text>Zwiększ licznik o {startCount} sekund</Text>
			<StopwatchDisplay>
				<Text> {minutes >= 10 ? minutes : `0${minutes}`}: </Text>
				<Text> {seconds >= 10 ? seconds : `0${seconds}`} </Text>
			</StopwatchDisplay>
			<StartStopButton bgcolor={buttonColor} variant='contained' onClick={handleStartCountButton}>
				{!timeOn ? 'Start' : 'Stop'}
			</StartStopButton>
			<ButtonGroup variant='contained'>
				<Button onClick={() => dispatch(minus())}>Odejmij sekunde</Button>
				<Button onClick={() => dispatch(zero())}>Resetuj</Button>
				<Button onClick={() => dispatch(add())}>Dodaj sekunde</Button>
				<Button onClick={() => dispatch(addToStart())}>Zwiększ licznik o {startCount} sekund</Button>
				<Button onClick={() => dispatch(minusToStart())}>Odejmij od licznika </Button>
			</ButtonGroup>
		</Container>
	)
}

export default StopWatch
