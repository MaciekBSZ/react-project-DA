import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CharCard from './CharCard'
const CharCards = ({ results }) => {
	const cards = results.map(({ name, id, image, gender, status }) => (
		<Grid item key={id} sm={3}>
			<Link to={`/charlist/${name}/${id}`}>
				<CharCard name={name} image={image} gender={gender} status={status} />
			</Link>
		</Grid>
	))
	return (
		<Grid container spacing={3}>
			{cards}
		</Grid>
	)
}

export default CharCards
