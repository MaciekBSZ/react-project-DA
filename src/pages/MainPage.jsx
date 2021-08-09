import { Box, TextField, Typography, Button, makeStyles } from '@material-ui/core'
import MainPageCards from '../components/MainPageCards'
import React from 'react'

const MainPage = () => {
	const useStyles = makeStyles({
		form: {
			display: 'flex',
			margin: '10px',
		},
		btn: {
			marginLeft: '10px',
			'&:hover': {
				backgroundColor: 'black',
				color: 'wheat',
			},
		},
	})
	const classes = useStyles()
	return (
		<>
			<Box height='30vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
				<Typography variant='h1' align='center' gutterBottom>
					Moja strona
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
			<MainPageCards />
		</>
	)
}

export default MainPage
