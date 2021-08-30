import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, ButtonGroup, Typography, makeStyles, Button } from '@material-ui/core'
import { SentimentVerySatisfied } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
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
const Navbutton = styled(Button)`
	& {
		transition: color 0.5s;
		z-index: 0;
		&:hover {
			color: wheat;
		}
		&::after {
			position: absolute;
			content: '';
			bottom: -5px;
			left: 0;
			height: 0;
			width: 100%;
			background-color: black;
			z-index: -1;
			transition: border-top 0.3s, border-bottom 0.3s, height 0.3s;
		}
	}
	&:hover::after {
		border-top: 5px solid;
		border-bottom: 5px solid;
		height: 100%;
	}
`

const NavBar = () => {
	const classes = useStyles()
	const history = useHistory()
	const [bgColor, setBgColor] = useState('')
	const navButtons = useSelector(state => state.arrays.navBarButtons).map(({ name, path, id }) => (
		<Navbutton key={id} onClick={() => history.push(path)}>
			{name}
		</Navbutton>
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
			<ButtonGroup variant='text'>{navButtons}</ButtonGroup>
		</Box>
	)
}

export default NavBar
