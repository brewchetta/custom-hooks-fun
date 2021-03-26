import { useState } from 'react'

export default function useFetchState(initialState) {

  const [busy, setBusy] = useState(false)
  const [state, setState] = useState(initialState)

  const fetchCallback = (url, options) => {
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
