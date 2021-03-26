import useCounter from '../hooks/useCounter'

export default function CounterExample() {

  const [counter, setCounter, counterWarning] = useCounter(0)

  const handleChange = e => {
    setCounter(e.target.value)
  }

  return (
    <div className="example">

      <h2>useCounter</h2>

      <p>This counter can go up but sends a warning instead of allowing it to be reduced:</p>

      <input type="number"
      onChange={handleChange}
      value={counter}
      />

      {counterWarning ? <p style={{color: 'red'}}>{counterWarning}</p> : null}

  </div>
  )

}
