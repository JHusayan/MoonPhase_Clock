import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center py-10 group">
      <div className="relative flex flex-col items-center justify-start w-20 h-20 overflow-hidden bg-gray-900 rounded-full ">
        <div className="absolute w-1 duration-1000 ease-in-out origin-bottom bg-gradient-to-t from-white to-red-400 rounded-full h-1/2 group-hover:rotate-[200deg]" />

        <div className="absolute h-1/2 w-1 origin-bottom rotate-[55deg] group-hover:rotate-[340deg] duration-1000 ease-in-out flex flex-col justify-end">
          <div className="w-full rounded-full bg-gradient-to-t from-white to-blue-400 h-2/3" />
        </div>

        <div className="absolute flex items-center justify-center flex-1 w-full h-full">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default App
