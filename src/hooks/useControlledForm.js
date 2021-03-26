import { useState, Fragment } from 'react'

export default function useControlledForm(submitCallback, ...inputs) {

  inputs = [...new Set(inputs)]

  const initialState = {}
  inputs.forEach(input => {
    initialState[input] = ''
  })

  const [inputValues, setInputValues] = useState(initialState)

  const handleChange = event => {
    setInputValues({...inputValues, [event.target.name]: event.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitCallback({...inputValues})
  }

  const renderInputs = () => {
    return Object.keys(inputValues).map(key => (
      <Fragment key={key}>
      <label>{key}:</label>

      <input type="text"
      name={key}
      onChange={handleChange}
      value={inputValues[key]} />
      <br/>
      </Fragment>
    ))
  }

  return (
    <form onSubmit={handleSubmit}>

      {renderInputs()}

      <input type="submit"
      value="Submit"
      />

    </form>
  )


}
