const CharListFilter = ({ handleStatus, status }) => {
	return (
		<select onChange={e => handleStatus(e.target.value)} value={status}>
			<option value={''}>Bez filtru</option>
			<option value={`&status=alive`}>Żywy</option>
			<option value={`&status=dead`}>Martwy</option>
			<option value={`&status=unknown`}>Nieznany</option>
		</select>
	)
}

export default CharListFilter
