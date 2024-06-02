import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline ">totalizer</h1>
      <h2>YES/NOアンケート</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        1台で
        </button>
        <p></p>
        <button onClick={() => setCount((count) => count + 1)}>
        みんなで
        </button>
      </div>
    </>
  )
}

export default App
