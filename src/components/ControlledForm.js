import { useState } from 'react'
import useControlledForm from '../hooks/useControlledForm'

export default function ControlledForm() {

  const [currentName, setCurrentName] = useState('Jimbo')
  const [currentAddress, setCurrentAddress] = useState('Canada')

  const handleSubmit = ({name, address}) => {
    setCurrentName(name)
    setCurrentAddress(address)
  }

  return (
    <div className="example">

      <h2>useControlledForm</h2>

      <p>This form uses a hook to build a dynamic form. All it needs is a submit callback and the fields it'll utilize</p>

      <p>Name: {currentName}</p>
      <p>Address: {currentAddress}</p>

      { useControlledForm(handleSubmit, "name", "address") }

    </div>
  )

}
