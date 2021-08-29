import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/toolkit/reducer'
import styled from 'styled-components'
import ClickerBG from '../img/ClickerBG.jpg'
import { Button, ButtonGroup, Paper } from '@material-ui/core'

const Container = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ClickerBG});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
	box-shadow: 7px 8px 10px grey;
`
const CounterArea = styled(Paper)`
	& {
		display: flex;
		flex-direction: column;
		background-color: transparent;
		justify-content: space-evenly;
		align-items: center;
		width: 20%;
		height: 20%;
		color: wheat;
	}
`
const Title = styled.h2`
	color: ${props => (props.modulo ? 'green' : null)};
`
const Clicker = () => {
	const count = useSelector(state => state.counters.counter.count)
	const dispatch = useDispatch()
	return (
		<Container>
			<CounterArea>
				{count % 5 === 0 && count !== 0 ? <Title modulo> {count}</Title> : <h2> {count} </h2>}
				<ButtonGroup variant='contained'>
					<Button onClick={() => dispatch(decrement())}>Odejmij 1</Button>
					<Button onClick={() => dispatch(reset())}>Resetuj</Button>
					<Button onClick={() => dispatch(increment())}>Dodaj 1</Button>
				</ButtonGroup>
			</CounterArea>
		</Container>
	)
}

export default Clicker
