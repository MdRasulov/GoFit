import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = <T>(query: string = 'exercises') => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string>('')

  const config = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/${query}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_KEY}`,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  }

  const sendRequest = async () => {
    setLoading(true)

    axios(config)
      .then((res) => {
        setErr('')
        setData(res.data)
      })
      .catch((err) => {
        setErr(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const resend = () => {
    sendRequest()
  }

  useEffect(() => {
    sendRequest()
  }, [query])

  return { data, loading, err, resend }
}
