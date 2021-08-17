import { Grid } from '@material-ui/core'
import CharCard from './CharCard'
const CharCards = ({ results }) => {
	const cards = results.map(({ name, id, image, gender, status }) => (
		<Grid item key={id} sm={3}>
			<CharCard name={name} image={image} gender={gender} status={status} />
		</Grid>
	))
	return (
		<Grid container spacing={3}>
			{cards}
		</Grid>
	)
}

export default CharCards
