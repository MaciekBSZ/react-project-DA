import React from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'

import img from '../img/AboutMePageImg.jpg'

const about = {
	name: 'Maciek',
	secondName: 'Ułanowicz',
	biogram:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda molestiae, maiores alias at possimus ut! Laboriosam reiciendis id modi ex! Doloribus totam quis assumenda magni magnam qui laborum cumque',
}

const AboutMe = () => {
	const { name, secondName, biogram } = about
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

	return (
		<Box>
			<Photo></Photo>
			<Bio>
				<Paper>
					<Typography variant='h3'>{name}</Typography>
					<Typography variant='h3'>{secondName}</Typography>
					<Typography>{biogram}</Typography>
				</Paper>
			</Bio>
		</Box>
	)
}

export default AboutMe
