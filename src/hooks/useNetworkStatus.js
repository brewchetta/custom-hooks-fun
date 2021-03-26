import { useState, useEffect } from 'react'

export default function useNetworkStatus(url, options, ...dependencies) {

  const [status, setStatus] = useState("Loading")
  const [busy, setBusy] = useState(false)

  useEffect(() => {

    if (!busy) {

      setBusy(true)
      setStatus("Loading")

      fetch(url, options)
      .then(res => {
        console.log(res)
        setStatus(res.status < 400 ? "Connected" : res.status < 500 ? "Bad Request" : "Server Error")
        setBusy(false)
      })
      .catch(error => {
        setStatus(error.message)
        setBusy(false)
      })

    }
  }, [...dependencies])

  return [status, busy]

}
