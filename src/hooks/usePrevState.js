import { useRef, useEffect } from 'react'

export default function usePrevious(value) {

  const ref = useRef()

  useEffect(() => {
    console.log('updating value')
    ref.current = value
  })

  return ref.current

}

// Ripped from https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
