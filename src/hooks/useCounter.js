import { useState } from 'react'

export default function useCounter(initial) {
  const [counter, setCounter] = useState(initial)

  const dispatch = num => {
    if (num > counter) {
      setCounter(num)
    } else {
      console.warn("You can't go down in numbers!")
    }
  }

  return [counter, dispatch]
}
