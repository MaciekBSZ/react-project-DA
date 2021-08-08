import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/ducks/counter'
import styled from 'styled-components'
const Title = styled.h2`
	color: ${props => (props.modulo ? 'green' : null)};
`
const Clicker = () => {
	const count = useSelector(state => state.counter.count)
	const dispatch = useDispatch()
	return (
		<>
			{count % 5 === 0 && count !== 0 ? <Title modulo> {count}</Title> : <h2> {count} </h2>}
			<button onClick={() => dispatch(decrement())}>Odejmij 1</button>
			<button onClick={() => dispatch(reset())}>Resetuj</button>
			<button onClick={() => dispatch(increment())}>Dodaj 1</button>
		</>
	)
}

export default Clicker
