import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, ButtonGroup, Typography, makeStyles, Button } from '@material-ui/core'
import { SentimentVerySatisfied } from '@material-ui/icons'
import { useSelector } from 'react-redux'
const useStyles = makeStyles({
	box: {
		transition: '0.5s',
		zIndex: '1',
		position: 'fixed',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: '7px 8px 10px grey',
		marginTop: '10px',
		width: '96%',
		padding: '10px',
		height: '5vh',
		border: '1px solid black',
		borderRadius: '12px',
	},
})
const NavBar = () => {
	const classes = useStyles()
	const history = useHistory()
	const [bgColor, setBgColor] = useState('')
	const navButtons = useSelector(state => state.arrays.navBarButtons)
	const buttons = navButtons.map(({ name, path, id }) => (
		<Button key={id} onClick={() => history.push(path)}>
			{name}
		</Button>
	))
	const handleScroll = bgColor => {
		if (bgColor !== 'nav.primary' && window.pageYOffset >= 100) {
			setBgColor('nav.primary')
		} else if (bgColor === 'nav.primary' && window.pageYOffset < 100) {
			setBgColor('')
		}
	}
	useEffect(() => {
		window.onscroll = () => handleScroll(bgColor)
	}, [bgColor])
	return (
		<Box className={classes.box} bgcolor={bgColor}>
			<Box display='flex' alignItems='center' width='10%' justifyContent='space-between'>
				<SentimentVerySatisfied />
				<Typography>No siema!</Typography>
			</Box>
			<ButtonGroup variant='text'>{buttons}</ButtonGroup>
		</Box>
	)
}

export default NavBar
