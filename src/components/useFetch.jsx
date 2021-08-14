import { useEffect, useState } from 'react'

const useFetch = url => {
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	useEffect(() => {
		async function getData() {
			try {
				setIsPending(false)
				const res = await fetch(url)
				const data = await res.json()
				setData(data)
			} catch (err) {
				setIsPending(true)
				console.log(err)
			}
		}
		getData()
	}, [url])
	return { data, isPending, setData, setIsPending }
}

export default useFetch
