import { Box, Typography } from '@material-ui/core'
import React from 'react'
const ErrorPage = () => {
	return (
		<Box height='94vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
			<Typography variant='h1' align='center' gutterBottom>
				Łobaben! Coś się zepsuło!
			</Typography>
		</Box>
	)
}

export default ErrorPage
