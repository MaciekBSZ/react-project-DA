import React from 'react'
import { Box, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ErrorPageImg from '../img/ErrorPageImg.png'
const Photo = styled.div`
	width: 300px;
	height: 300px;
	background-image: url(${ErrorPageImg});
	background-size: cover;
	background-repeat: no-repeat;
`
const ErrorPage = () => {
	return (
		<Box height='94vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
			<Typography variant='h1'>Łobaben! Coś się zepsuło!</Typography>
			<Photo></Photo>
		</Box>
	)
}

export default ErrorPage
