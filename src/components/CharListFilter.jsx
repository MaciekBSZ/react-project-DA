const CharListFilter = ({ handleState, status }) => {
	return (
		<select onChange={e => handleState(e.target.value)} value={status}>
			<option value={`&status=alive`}>Żywy</option>
			<option value={`&status=dead`}>Martwy</option>
			<option value={`&status=unknown`}>Nieznany</option>
			<option value={''}>Bez filtru</option>
		</select>
	)
}

export default CharListFilter
