import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import MainPageCard from './MainPageCard'

import mainPageCards from '../data/mainPageCards'

const useStyles = makeStyles({
	gridContainer: {
		margin: 'auto',
		width: '90%',
	},
})

const MainPageCards = () => {
	const classes = useStyles()
	const cards = mainPageCards.map(({ title, text, icon, path, id }) => (
		<Grid item key={id} sm={4}>
			<MainPageCard title={title} text={text} path={path} icon={icon} />
		</Grid>
	))
	return (
		<Grid container spacing={3} className={classes.gridContainer}>
			{cards}
		</Grid>
	)
}

export default MainPageCards
