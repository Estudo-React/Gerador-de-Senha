import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SliderSizes from './assets/components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SliderSizes/>
      </div>
    </>
  )
}

export default App
