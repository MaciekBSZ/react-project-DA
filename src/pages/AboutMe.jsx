import React from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'
import img from '../img/AboutMePageImg.jpg'

const Box = styled.div`
	position: relative;
	top: 3vw;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Photo = styled.div`
	width: 500px;
	height: 500px;
	border-radius: 50%;
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 55%;
`
const Bio = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	width: 400px;
	height: 200px;  
	margin: 30px;
	padding: 20px;
`
const AboutMe = ({MyInfo}) => {
	return (
		<Box>
			<Photo></Photo>
			<Bio>
				<Paper>
					<Typography variant='h3'>{MyInfo.name}</Typography>
					<Typography variant='h3'>{MyInfo.secondName}</Typography>
					<Typography>{MyInfo.biogram}</Typography>
				</Paper>
			</Bio>
		</Box>
	)
}

export default AboutMe
