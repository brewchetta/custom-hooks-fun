import usePrevState from '../hooks/usePrevStateWithDependency'
import { useState } from 'react'

export default function PrevStateWithDependency() {

  const [imgURL, setImgURL] = useState('https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/cat-meme-97.jpg?resize=640%2C360&ssl=1')

  const [input, setInput] = useState('')

  const prevURL = usePrevState(imgURL)

  const handleSubmit = e => {
    e.preventDefault()
    setImgURL(input)
  }

  return (
    <div className="example">

      <p>This form tracks the previous state for us (technically this can be any previous value)</p>
      <p>Unlike the one above, this form uses a dependency array in the custom hook to avoid unnecessarily updating the prevState if it's the same</p>

      <form onSubmit={handleSubmit}>

        <input type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
        />

        <input type="submit"
        value="Submit URL"
        />

      </form>

      <p>Current Image: <br/>
        <img style={{maxWidth: "300px"}} src={imgURL} alt={imgURL} />
      </p>

      <p>Previous Image: <br/>
        <img style={{maxWidth: "300px"}} src={prevURL} alt={prevURL} />
      </p>

    </div>
  )

}
