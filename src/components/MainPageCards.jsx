import React from 'react'
// import InfoIcon from '@material-ui/icons/Info'
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
// import AvTimerIcon from '@material-ui/icons/AvTimer'
// import ExitToAppIcon from '@material-ui/icons/ExitToApp'
// import TimerIcon from '@material-ui/icons/Timer'
// import DoneIcon from '@material-ui/icons/Done'
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
	const cards = useSelector(state => state.cards)
	// const cards = [
	// 	{ id: 1, title: 'O mnie', path: '/aboutme', text: 'Strona z opisem', icon: <InfoIcon className={classes.icon} /> },
	// 	{ id: 2, title: 'Lista Postaci', path: '/charlist', text: 'Lista postaci z kreskówki Rick and Morty', icon: <EmojiPeopleIcon className={classes.icon} /> },
	// 	{ id: 3, title: 'Licznik', path: '/clicker', text: 'Prosty licznik', icon: <AvTimerIcon className={classes.icon} /> },
	// 	{ id: 4, title: 'Strona logowania', path: '/loginpage', text: 'Strona logowania', icon: <ExitToAppIcon className={classes.icon} /> },
	// 	{ id: 5, title: 'Stoper', path: '/stopwatch', text: 'Stoper', icon: <TimerIcon className={classes.icon} /> },
	// 	{ id: 6, title: 'Rejestracja', path: '/registerpage', text: 'Strona rejestracji', icon: <DoneIcon className={classes.icon} /> },
	// ]
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
