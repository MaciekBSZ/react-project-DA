import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/toolkit/reducer'
import styled from 'styled-components'
import { Button, ButtonGroup } from '@material-ui/core'
const Title = styled.h2`
	color: ${props => (props.modulo ? 'green' : null)};
`
const Clicker = () => {
	const count = useSelector(state => state.counters.counter.count)
	const dispatch = useDispatch()
	return (
		<>
			{count % 5 === 0 && count !== 0 ? <Title modulo> {count}</Title> : <h2> {count} </h2>}
			<ButtonGroup variant='contained'>
				<Button onClick={() => dispatch(decrement())}>Odejmij 1</Button>
				<Button onClick={() => dispatch(reset())}>Resetuj</Button>
				<Button onClick={() => dispatch(increment())}>Dodaj 1</Button>
			</ButtonGroup>
		</>
	)
}

export default Clicker
