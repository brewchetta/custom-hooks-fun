import { useState } from 'react'

export default function useFetchState(url, options) {

  const [busy, setBusy] = useState(false)
  const [state, setState] = useState(null)

  const fetchCallback = () => {
    if (!busy) {
      setBusy(true)
      fetch(url, options).then(res => res.json())
      .then(data => {
        setBusy(false)
        setState(data)
      })
    }
  }

  return [state, fetchCallback, busy]

}
