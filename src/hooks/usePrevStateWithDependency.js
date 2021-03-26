import { useRef, useEffect } from 'react'

export default function usePrevStateWithDependency(value) {

  const ref = useRef()


  useEffect(() => {
    console.log('updating value')
    ref.current = value
  }, [value])

  return ref.current
}
