// const SortingFilter = ({ handleSort, isSorted }) => {
// 	return (
// 		<select onChange={e => handleSort(e.target.value)} value={isSorted}>
// 			<option value={false}>Bez sortowania</option>
// 			<option value={'aToZ'}>Sortuj od A do Z</option>
// 			<option value={`zToA`}>Sortuj od Z do A</option>
// 		</select>
// 	)
// }

// export default SortingFilter

import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'

const AntSwitch = withStyles(theme => ({
	root: {
		width: 30,
		height: 16,
		padding: 0,
		display: 'flex',
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.grey[500],
			'& + $track': {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.primary.main,
			},
		},
	},
	thumb: {
		width: 12,
		height: 12,
		boxShadow: 'none',
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white,
	},
	checked: {},
}))(Switch)
const SortingFilter = ({ handleSort, isSorted }) => {
	return (
		<div>
			<FormGroup>
				<Typography component='div'>
					<Grid component='label' container alignItems='center' spacing={1}>
						<Grid item>A-Z</Grid>
						<Grid item>
							<AntSwitch checked={isSorted} onChange={handleSort} name='checkedC' />
						</Grid>
						<Grid item>Z-A</Grid>
					</Grid>
				</Typography>
			</FormGroup>
		</div>
	)
}

export default SortingFilter
