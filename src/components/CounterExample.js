import useCounter from '../hooks/useCounter'

export default function CounterExample() {

  const [counter, setCounter] = useCounter(0)

  const handleChange = e => {
    setCounter(e.target.value)
  }

  return (
    <div className="example">

      <input type="number"
      onChange={handleChange}
      value={counter}
      />

  </div>
  )

}
