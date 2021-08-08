import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/ducks/counter'
import styled from 'styled-components'

const Clicker = () => {
	const count = useSelector(state => state.counter.count)
	const Title = styled.h2`
		color: ${count % 5 === 0 && count > 0 ? 'green' : null};
	`
	const dispatch = useDispatch()
	const handleIncrement = () => {
		dispatch(increment())
	}
	const handleDecrement = () => {
		dispatch(decrement())
	}
	const handleReset = () => {
		dispatch(reset())
	}
	return (
		<>
			<Title>licznik: {count}</Title>
			<button onClick={handleDecrement}>Odejmij 1</button>
			<button onClick={handleReset}>Resetuj</button>
			<button onClick={handleIncrement}>Dodaj 1</button>
		</>
	)
}

export default Clicker
