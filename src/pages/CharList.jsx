import React from 'react'
import { useState, useEffect } from 'react'
import CharCard from '../components/CharCard'

const CharList = () => {
	const [cards, setCards] = useState(null)
	useEffect(() => {
		getData()
	}, [])
	const getData = async () => {
		try {
			const res = await fetch('https://rickandmortyapi.com/api/character')
			const data = await res.json()
			setCards(data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<div> {cards && cards.info.pages} </div>
			<CharCard />
		</>
	)
}

export default CharList
