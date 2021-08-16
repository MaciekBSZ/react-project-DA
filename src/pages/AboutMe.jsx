import React from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'
import img from '../img/AboutMePageImg.jpg'
import bgImg from '../img/AboutMePageBG.jpg'

const Box = styled.div`
	position: relative;
	top: 15px;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-image: url(${bgImg});
	background-size: cover;
	background-repeat: no-repeat;
	align-items: center;
	justify-content: center;
`
const Photo = styled.div`
	width: 500px;
	background-image: url(${img});
	height: 500px;
	background-size: cover;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: 55%;
`
const Bio = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	width: 500px;
	height: 200px;
	margin: 30px;
	padding: 20px;
`
const AboutMe = ({ MyInfo }) => {
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
