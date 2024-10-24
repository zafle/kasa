import { useState, useEffect } from 'react'

export function useFetch(path) {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!path) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(path)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log('+++++ error ++++', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [path])
  return { isLoading, data, error }
}
