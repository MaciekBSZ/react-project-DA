import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import MainPageCard from './MainPageCard'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
	icon: {
		margin: 'auto',
		width: 100,
		height: 100,
	},
	gridContainer: {
		margin: 'auto',
		width: '90%',
	},
})

const MainPageCards = () => {
	const classes = useStyles()
	const cards = useSelector(state => state.arrays.cards)
	const navCards = cards.map(({ title, text, icon, path, id }) => (
		<Grid item key={id} sm={4}>
			<MainPageCard title={title} text={text} path={path} icon={icon} />
		</Grid>
	))
	return (
		<Grid container spacing={3} className={classes.gridContainer}>
			{navCards}
		</Grid>
	)
}

export default MainPageCards
