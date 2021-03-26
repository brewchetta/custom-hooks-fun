import usePrevState from '../hooks/usePrevState'
import { useState } from 'react'

export default function PrevState() {

  const [imgURL, setImgURL] = useState('https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/cat-meme-97.jpg?resize=640%2C360&ssl=1')

  const [input, setInput] = useState('')

  const prevURL = usePrevState(imgURL)

  const handleSubmit = e => {
    e.preventDefault()
    setImgURL(input)
  }

  return (
    <div className="example">

      <form onSubmit={handleSubmit}>

        <input type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
        />

        <input type="submit"
        value="Submit URL"
        />

      </form>

      <p>Current Image:
        <img style={{maxWidth: "300px"}} src={imgURL} alt={imgURL} />
      </p>

      <p>Previous Image:
        <img style={{maxWidth: "300px"}} src={prevURL} alt={prevURL} />
      </p>

    </div>
  )

}
