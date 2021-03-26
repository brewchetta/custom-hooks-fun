import useNetworkStatus from "../hooks/useNetworkStatus"
import { useState, useEffect } from 'react'

export default function NetworkStatus() {

  const [toggle, setToggle] = useState(false)

  const [messages, setMessages] = useState([])

  const [catFactsStatus, catBusySignal] = useNetworkStatus("https://ghibliapi.herokuapp.com/films", {}, toggle)

  useEffect(() => {
    setMessages([...messages, catFactsStatus])
  }, [catFactsStatus])

  return (
    <div className="example">

      <h2>useNetworkStatus</h2>

      <p>This hook will check whether it can fetch to a specified URL or not. It returns a status and a busy signal and takes in a URL, fetch options, and a dependency array to avoid constant fetches. In this case, it'll check every time you toggle the button. Right now this only checks for APIs that allow cross origin sources.</p>

      <p>One of the nice things here is it'll avoid fetching if it's already checking the status.</p>

      <p>{catBusySignal ? "Getting Status" : "Confirmed"}</p>

      <p>Current status for "https://ghibliapi.herokuapp.com/films": {catFactsStatus}</p>

      <button onClick={() => setToggle(!toggle)}>{toggle ? "Beep" : "Boop"}</button>

      <p>Previous Statuses:</p>

      {messages.map((m,i) => <p key={i}>{m}</p>)}

    </div>
  )

}
