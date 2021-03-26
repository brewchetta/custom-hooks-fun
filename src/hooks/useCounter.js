import { useState } from 'react'

export default function useCounter(initial) {
  const [counter, setCounter] = useState(initial)
  const [warning, setWarning] = useState('')

  const dispatch = num => {
    if (parseInt(num) > counter) {
      setCounter(num)
      setWarning('')
    } else {
      setWarning('You cannot reduce these numbers!')
    }
  }

  return [counter, dispatch, warning]
}
