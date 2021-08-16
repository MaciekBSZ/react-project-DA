import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

const CharListFilter = ({ handleStatus, status }) => {
	const classes = useStyles()
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='demo-simple-select-label'>Filtr postaci</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				// value={status}
				onChange={e => handleStatus(e.target.value)}
				value={status}>
				<MenuItem value={''}>Bez filtru</MenuItem>
				<MenuItem value={`&status=alive`}> Żywy</MenuItem>
				<MenuItem value={`&status=dead`}>Martwy</MenuItem>
				<MenuItem value={`&status=unknown`}>Nieznany</MenuItem>
			</Select>
		</FormControl>
	)
}

export default CharListFilter

// <select onChange={e => handleStatus(e.target.value)} value={status}>
// 	<option value={''}>Bez filtru</option>
// 	<option value={`&status=alive`}>Żywy</option>
// 	<option value={`&status=dead`}>Martwy</option>
// 	<option value={`&status=unknown`}>Nieznany</option>
// </select>
