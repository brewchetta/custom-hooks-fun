import useFetchState from '../hooks/useFetchState'

const URL = "https://cat-fact.herokuapp.com/facts"

export default function Fetch() {

  const [catFacts, fetchCatFacts, busySignal] = useFetchState([])

  return (

    <div className="example">

      <p>This is a cool one! It's a stateful hook like useState however it's "setter" callback accepts a URL / options and will fetch data, parse the JSON, and automatically set the state!</p>
      <p>It also includes a "busy signal" so you can introduce a loading spinner or something similar while the fetch is firing.</p>

      {busySignal ? <p>Loading...</p> : null}

      <button onClick={() => fetchCatFacts(URL)}>Fetch Cat Facts</button>

      {catFacts.map(c => <p key={c._id}>{c.text}</p>)}

    </div>


  )

}
