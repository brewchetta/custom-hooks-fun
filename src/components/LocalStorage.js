import useLocalStorage from "../hooks/useLocalStorage"

export default function LocalStorage() {

  const [catName, setCatName, clearCatName] = useLocalStorage('cat-name')

  return (

    <div className="example">

      <h2>useLocalStorage</h2>

      <p>This piece of state is tied directly to local storage. This is handy since it'll persist even when leaving / reloading the page!</p>

      <p>Current Cat Name: {catName}</p>

      <input type="text"
      onChange={e => setCatName(e.target.value)}
      value={catName || ''}
      />

      <br/>

      <button onClick={clearCatName}>Clear Cat Name</button>

    </div>

  )

}
