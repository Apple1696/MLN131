import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
