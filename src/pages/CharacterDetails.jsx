import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import ErrorPage from './ErrorPage'
import useFetch from '../components/useFetch'
import TypeWriterEffect from 'react-typewriter-effect'
import { Button } from '@material-ui/core'
const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data, isPending, error } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

	return (
		<>
			{data && (
				<>
					<Link to={`/charlist/`}>
						<Button>Powrót do listy postaci</Button>
					</Link>
					<TypeWriterEffect
						textStyle={{
							color: '#3F3D56',
							fontWeight: 500,
							fontSize: '1.5em',
						}}
						startDelay={2000}
						cursorColor='#3F3D56'
						multiText={[
							`Imie: ${name}`,
							`Pochodzenie: ${data.origin.name}`,
							`Status: ${data.status.toLowerCase()}`,
							`Lokalizacja: ${data.location.name}`,
							`Płeć: ${data.gender.toLowerCase()}`,
							'Koniec transmisji...',
						]}
						multiTextDelay={2000}
						typeSpeed={50}
					/>
				</>
			)}
			{isPending && <Loader />}
			{error && <ErrorPage />}
		</>
	)
}

export default CharacterDetails
