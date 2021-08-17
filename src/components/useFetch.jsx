import { useEffect, useState } from 'react'
// W myśl zasady DRY, czyli dont repeat yourself, na podstawie jednej z lekcji stworzyłem custom hooka, któego będe wykorszystywał w 2 miejscach.
const useFetch = url => {
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(false)
	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch(url)
				const data = await res.json()
				setIsPending(false)
				setData(data)
			} catch (err) {
				setIsPending(false)
				setData(null)
				setError(true)
			}
		}
		getData()
	}, [url])
	return { data, isPending, setIsPending, error }
}

export default useFetch
