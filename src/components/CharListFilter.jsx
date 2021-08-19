import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
const useStyles = makeStyles(theme => ({
	formControl: {
		minWidth: 120,
		marginBottom: 10,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

const CharListFilter = ({ handleStatus, status }) => {
	const classes = useStyles()
	const filtersValues = useSelector(state => state.filters)
	// const filtersValues = [
	// 	{ id: 1, value: ``, title: 'Bez filtru' },
	// 	{ id: 2, value: `&status=alive`, title: 'Żywy' },
	// 	{ id: 3, value: `&status=dead`, title: 'Martwy' },
	// 	{ id: 4, value: `&status=unknown`, title: 'Nieznany' },
	// ]
	const filter = filtersValues.map(({ title, value, id }) => (
		<MenuItem key={id} value={value}>
			{title}
		</MenuItem>
	))
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='select'>Filtr postaci</InputLabel>
			<Select labelId='select' id='select' onChange={e => handleStatus(e.target.value)} value={status}>
				{filter}
			</Select>
		</FormControl>
	)
}

export default CharListFilter
