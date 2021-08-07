import { Box, TextField, Typography, Button, makeStyles } from '@material-ui/core'
import React from 'react'

const MainPage = () => {
	const useStyles = makeStyles({
		form: {
			display: 'flex',
			marginTop: '10px',
		},
		btn: {
			marginLeft: '10px',

			'&:hover': {
				backgroundColor: 'violet',
			},
		},
	})
	const classes = useStyles()
	return (
		<Box height='94vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
			<Typography variant='h1' align='center' gutterBottom>
				Łobaben! Ale bieda!
			</Typography>
			<Typography variant='h5' align='center' gutterBottom>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde assumenda sit alias ad, laborum animi asperiores dolorem, hic nobis eveniet iusto optio ex omnis dolores voluptate possimus
				esse facere?
			</Typography>
			<form noValidate autoComplete='off' className={classes.form}>
				<TextField id='filled-basic' label='Szukajka' variant='filled' color='primary' />
				<Button type='button' variant='contained' className={classes.btn}>
					Szukaj!
				</Button>
			</form>
		</Box>
	)
}

export default MainPage
