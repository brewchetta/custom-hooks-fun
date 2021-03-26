import useDocumentTitle from '../hooks/useDocumentTitle'

export default function DocumentTitle() {

  const [documentTitle, setDocumentTitle] = useDocumentTitle()

  return (

    <div className="example">

      <h2>useDocumentTitle</h2>

      <p>This input will change the title of the document. This also includes a piece of state to make it easy to see what the document's title is.</p>

      <p>Current title: {documentTitle}</p>

      <input type="text"
      onChange={e => setDocumentTitle(e.target.value)}
      value={documentTitle}
      />

    </div>

  )

}
