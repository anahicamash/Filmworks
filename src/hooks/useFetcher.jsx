// hooks
import { useState, useEffect } from 'react'

const useFetcher = (url, query, callback) => {
  const [response, setResponse] = useState([])
 

  const getData = async () => {
    const search = await callback(url, query)
    setResponse(search)
  }


  useEffect(() => {
    getData()
  }, [query])

  return { response }
}

export default useFetcher
