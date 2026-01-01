import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
      style={{
        backgroundColor: color
      }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
        <div className="flex flex-wrap justify-center gap-3
          shadow-lg bg-white px-4 py-2 rounded-2xl">
            <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg cursor-pointer"
              style={{
                backgroundColor: "red"
              }}
              onClick={() => {setColor("red")}}
            >Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg cursor-pointer"
              style={{
                backgroundColor: "green"
              }}
              onClick={() => {setColor("green")}}
            >Green</button>

            <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg cursor-pointer"
              style={{
                backgroundColor: "blue"
              }}
              onClick={() => {setColor("blue")}}
            >Blue</button>

            <button className="outline-none px-4 py-1 rounded-full text-blue-800
              shadow-lg cursor-pointer"
              style={{
                backgroundColor: "cyan"
              }}
              onClick={() => {setColor("cyan")}}
            >Cyan</button>
          </div>
      </div>
    </div>
  )
}

export default App
