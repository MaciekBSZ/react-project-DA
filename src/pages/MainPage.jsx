import React from 'react'
import { Box, TextField, Typography, Button, makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import MainPageCards from '../components/MainPageCards'

const MainPageText = styled(Typography)`
	& {
		text-shadow: 2px 2px 5px wheat;
	}
`

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
			<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
				<MainPageText variant='h1' align='center' gutterBottom>
					Moja strona
				</MainPageText>
				<MainPageText variant='h5' align='center' gutterBottom>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde assumenda sit alias ad, laborum animi asperiores dolorem, hic nobis eveniet iusto optio ex omnis dolores voluptate possimus
					esse facere?
				</MainPageText>
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
