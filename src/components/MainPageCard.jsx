import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		transition: '0.5s',
		textAlign: 'center',
		margin: 'auto',
		'&:hover': {
			background: 'black',
			color: 'wheat',
		},
	},
	media: {
		height: 70,
	},
})

const MainPageCard = ({ icon, title, text, path }) => {
	const history = useHistory()
	const classes = useStyles()
	return (
		<Card className={classes.root} onClick={() => history.push(path)}>
			<CardActionArea>
				<CardMedia className={classes.media} />
				{icon}
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body2' component='p'>
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default MainPageCard
