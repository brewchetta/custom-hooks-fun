import { useRef, useEffect } from 'react'

export default function usePrevStateWithDependency(value, array) {

  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, array)

  return ref.current,
}
