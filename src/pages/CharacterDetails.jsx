import { Link, useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Loader from '../components/Loader'
import ErrorPage from './ErrorPage'
import useFetch from '../components/useFetch'
const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data, isPending, error } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

	return (
		<>
			{data && (
				<>
					<Link to={`/charlist/`}>
						<button>Powrót do listy postaci</button>
					</Link>
					<Typography variant='h2'>Imie postaci: {name}</Typography>
					<Typography variant='h3'>Pochodzenie postaci: {data.origin.name}</Typography>
					<Typography variant='h3'>Status postaci: {data.status}</Typography>
					<Typography variant='h3'>Lokalizacja postaci: {data.location.name}</Typography>
				</>
			)}
			{isPending && <Loader />}
			{error && <ErrorPage />}
		</>
	)
}

export default CharacterDetails
