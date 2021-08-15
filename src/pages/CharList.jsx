import { useState } from 'react'
import CharCards from '../components/CharCards'
import Loader from '../components/Loader'
import Button from '@material-ui/core/Button'
import useFetch from '../components/useFetch'
import CharListFilter from '../components/CharListFilter'
import SortingFilter from '../components/SortingFilter'

const CharList = () => {
	const [page, setPage] = useState(1)
	const [status, setStatus] = useState('')
	const [isSorted, setIsSorted] = useState(false)
	const { data, isPending, setData, setIsPending } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}${status}`)

	const handleNextPage = () => {
		if (data.info.next !== null) {
			setIsPending(true)
			setData(null)
			setPage(page => page + 1)
		} else return
	}
	const handlePreviousPage = () => {
		if (data.info.prev !== null) {
			setData(null)
			setIsPending(true)
			setPage(page => page - 1)
		} else return
	}
	const handleStatus = newStatus => {
		setPage(1)
		setStatus(newStatus)
	}
	const handleSort = () => {
		setIsSorted(isSorted => !isSorted)
		if (!isSorted) {
			data.results.sort((b, a) => a.name.localeCompare(b.name))
		}
		if (isSorted) {
			data.results.sort((a, b) => a.name.localeCompare(b.name))
		}
	}
	return (
		<>
			<CharListFilter handleStatus={handleStatus} status={status} />
			<SortingFilter handleSort={handleSort} isSorted={isSorted} />
			{data && (
				<div>
					<Button onClick={handlePreviousPage}>{data.info.prev !== null ? <p>Poprzednia strona</p> : <p>Jesteś na pierwszej stronie</p>} </Button>
					<Button onClick={handleNextPage}>{data.info.next !== null ? <p>Następna strona</p> : <p>Jesteś na ostatniej stronie</p>}</Button>
					<h2>
						O, tyle jest stron {data.info.pages}, a jesteś na stronie {page}
					</h2>
					<CharCards id={data.results.id} results={data.results} name={data.results.name} image={data.results.image} gender={data.results.gender} />
				</div>
			)}
			{isPending && <Loader />}
		</>
	)
}

export default CharList
