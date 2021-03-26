import useFetchState from '../hooks/useFetchState'

const URL = "https://cat-fact.herokuapp.com/facts"

export default function Fetch() {

  const [catFacts, fetchCatFacts, busySignal] = useFetchState([])

  return (

    <div className="example">

      {busySignal ? <p>Loading...</p> : null}

      <button onClick={() => fetchCatFacts(URL)}>Fetch Cat Facts</button>

      {catFacts.map(c => <p key={c._id}>{c.text}</p>)}

    </div>


  )

}
