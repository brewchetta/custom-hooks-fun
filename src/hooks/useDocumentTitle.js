import { useState } from 'react'

export default function useDocumentTitle() {

  const [state, setState] = useState(document.title)

  const setDocumentTitle = title => {
    document.title = title
    setState(title)
  }

  return [state, setDocumentTitle]

}
