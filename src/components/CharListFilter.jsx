import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='select'>Filtr postaci</InputLabel>
			<Select labelId='select' id='select' onChange={e => handleStatus(e.target.value)} value={status}>
				<MenuItem value={''}>Bez filtru</MenuItem>
				<MenuItem value={`&status=alive`}> Żywy</MenuItem>
				<MenuItem value={`&status=dead`}>Martwy</MenuItem>
				<MenuItem value={`&status=unknown`}>Nieznany</MenuItem>
			</Select>
		</FormControl>
	)
}

export default CharListFilter
