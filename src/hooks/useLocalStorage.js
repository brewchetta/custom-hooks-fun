import { useState } from 'react'

export default function useLocalStorage(key) {

  const [state, setState] = useState(localStorage.getItem(key))

  const setItemState = value => {
    setState(value)
    localStorage.setItem(key, value)
  }

  const clearItemState = () => localStorage.removeItem(key)

  return [state, setItemState, clearItemState]

}
