import CharCard from './CharCard'
import { Grid } from '@material-ui/core'
const CharCards = ({ results, name, id, image, gender }) => {
	const cards = results.map(({ name, id, image, gender }) => (
		<Grid item key={id} sm={3}>
			<CharCard name={name} image={image} gender={gender} />
		</Grid>
	))
	return (
		<Grid container spacing={3}>
			{cards}
		</Grid>
	)
}

export default CharCards
