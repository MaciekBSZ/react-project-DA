import { useState, useEffect, useCallback } from 'react'
import CharCards from '../components/CharCards'
import Loader from '../components/Loader'
import Button from '@material-ui/core/Button'

const CharList = () => {
	const [page, setPage] = useState(1)
	const [cards, setCards] = useState(null)
	const [loader, setLoader] = useState(true)
	const getData = useCallback(async () => {
		try {
			const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
			setLoader(false)
			const data = await res.json()
			setCards(data)
			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}, [page])
	useEffect(() => {
		getData()
	}, [getData])

	const handleNextPage =  () => {
		if (cards.info.next !== null) {
			setLoader(true)
			setCards(null)
			setPage(page => page + 1)
		} else return
	}
	const handlePreviousPage =  () => {
		if (cards.info.prev !== null) {
			setCards(null)
			setLoader(true)
			setPage(page => page - 1)
		} else return
	}

	return (
		<>
			{cards && (
				<div>
					<Button onClick={handlePreviousPage}>{cards.info.prev !== null ? <p>Poprzednia strona</p> : <p>Jesteś na pierwszej stronie</p>} </Button>
					<Button onClick={handleNextPage}>{cards.info.next !== null ? <p>Następna strona</p> : <p>Jesteś na ostatniej stronie</p>}</Button>
					<h2>
						O, tyle jest stron {cards.info.pages}, a jesteś na stronie {page}
					</h2>
					<CharCards id={cards.results.id} results={cards.results} name={cards.results.name} image={cards.results.image} gender={cards.results.gender} />
				</div>
			)}
			{loader && <Loader />}
		</>
	)
}

export default CharList
