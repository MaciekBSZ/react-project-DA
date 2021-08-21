import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CharCard from './CharCard'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
	},
})
const CharCards = ({ results }) => {
	const classes = useStyles()
	const cards = results.map(({ name, id, image, gender, status }) => (
		<Grid item key={id} sm={3}>
			<Link to={`/charlist/${name}/${id}`} className={classes.link}>
				<CharCard name={name} image={image} gender={gender} status={status} />
			</Link>
		</Grid>
	))
	return (
		<Grid container spacing={7}>
			{cards}
		</Grid>
	)
}

export default CharCards
