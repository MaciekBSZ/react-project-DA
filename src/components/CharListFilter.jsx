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
	const filtersValues = useSelector(state => state.arrays.filters).map(({ title, value, id }) => (
		<MenuItem key={id} value={value}>
			{title}
		</MenuItem>
	))
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='select'>Filtr postaci</InputLabel>
			<Select labelId='select' id='select' onChange={e => handleStatus(e.target.value)} value={status}>
				{filtersValues}
			</Select>
		</FormControl>
	)
}

export default CharListFilter
