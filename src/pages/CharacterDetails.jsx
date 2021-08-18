import { Link, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch'
const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)
	return (
		<div>
			{data && (
				<>
					<Link to={`/charlist/`}>
						<button>Powrót do listy postaci</button>
					</Link>
					<div>{name}</div>
					<div>{data.origin.name}</div>
					<div>{data.status}</div>
					<div>{data.location.name}</div>
				</>
			)}
		</div>
	)
}

export default CharacterDetails
