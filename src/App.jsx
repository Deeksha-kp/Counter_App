import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-light text-center mt-5'>Couter app</h1>
      <Counter/>
    </>
  )
}

export default App
