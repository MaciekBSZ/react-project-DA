import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		height: 350,
		zIndex: 1,
		transition: 'box-shadow 0.5s, color 0.5s, background 0.5s',
		'&:hover': {
			background: 'black',
			color: 'wheat',
			boxShadow: '5px 5px 5px wheat',
		},
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
