import { Fragment, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <Fragment>
      <h1>Hello, World!</h1>
      <button onClick={handleClick}>You pressed me {count} times</button>
    </Fragment>
  )
}

export default App
