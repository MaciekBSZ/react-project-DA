import { useState, useEffect, useCallback } from 'react'
import CharCards from '../components/CharCards'
import Loader from '../components/Loader'
import Button from '@material-ui/core/Button'
// import { useCallback } from 'react'

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

	const handleNextPage = () => {
		if (cards.info.next !== null) {
			setLoader(true)
			setCards(null)
			setPage(page => page + 1)
		} else return
	}
	const handlePreviousPage = () => {
		if (cards.info.prev < 0) {
			setCards(null)
			setLoader(true)
			setPage(page => page - 1)
		} else return
	}

	return (
		<>
			<Button onClick={handlePreviousPage}>Poprzednia strona</Button>
			<Button onClick={handleNextPage}>{page > 5 ? <p>Następna strona</p> : <p>asadasd</p>}</Button>
			{cards && (
				<h2>
					O, tyle jest stron {cards.info.pages}, a jesteś na stronie {page}
				</h2>
			)}
			{cards && <CharCards id={cards.results.id} results={cards.results} name={cards.results.name} image={cards.results.image} gender={cards.results.gender} />}
			{loader && <Loader />}
		</>
	)
}

export default CharList
