import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		height: 300,
		zIndex: 1,
	},
	media: {
		height: 200,
		transition: 'transform .5s, filter .5s',
		zIndex: 2,
		'&:hover': {
			transform: 'scale(1.1)',
			filter: 'brightness(1.2)',
		},
	},
	content: {
		height: 200,
		'&:hover': {
			backgroundColor: 'primary.light',
		},
	},
})

const CharCard = ({ name, status, gender, image }) => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} />
				<CardContent className={classes.content}>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' component='p'>
						Status: {status}
					</Typography>
					<Typography variant='body2' component='p'>
						Gender: {gender}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CharCard
