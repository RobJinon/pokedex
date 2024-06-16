import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-center border border-slate-400'>
      <h1 className='text-8xl '>Hewow koki</h1>
    </div>
)
}

export default App
