import {useState} from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [history, setHistory] = useState([])

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const clear = () => {
    setConvertedAmount(0)
    setAmount(0)
    setHistory([])
  }

  const convert = () => {
      if (!currencyInfo[to]) {
        console.log("Data not loaded yet");
        return;
    }

      const result = amount * currencyInfo[to]
      setConvertedAmount(result)

      const historyItem = `${amount} ${from} = ${result} ${to}`

      setHistory((prevHistory) => {
        const newHistory =  [historyItem, ...prevHistory];

        return newHistory.slice(0, 3)
      })

      // This is the most important concept in modern JavaScript: The Spread Operator (...).
      // You are absolutely correct that prevHistory holds the old list (e.g., ["Old 1", "Old 2"]).
      // Here is the detailed breakdown of the line: const newHistory = [historyItem, ...prevHistory];

      // 1. The [ ] (The Brand New Box)
      // The square brackets create a completely new, empty array in memory.
      // Why? React rules say you cannot change the old array (Mutation). You must create a fresh one.
      // Think of it as buying a new, empty cardboard box.

      // 2. historyItem (The First Entry)      // You placed historyItem at the start of this new box.
      // This ensures your latest conversion shows up at the top of the list.
      // Current Box: ["New Conversion", (waiting for more...)]

      // 3. ...prevHistory (The "Unpacking" Magic)      // The three dots ... are the Spread Operator. It takes the Old Box (prevHistory) and dumps its contents out individually.
      // Without ...: If you wrote [historyItem, prevHistory], you would get a "Box inside a Box" (Nested Array): ["New", ["Old 1", "Old 2"]] ❌ (Wrong structure)
      // With ...: It says: "Take 'Old 1' and 'Old 2' out of their array and put them here as separate items." ["New", "Old 1", "Old 2"] ✅ (Correct flat list)

      // Visual Example
      // Imagine:

      // prevHistory = ["Apple", "Banana"]
      // historyItem = "Orange"

      // The code ["Orange", ...prevHistory] does this:
      // Create New Array: [ ]
      // Add Orange: [ "Orange" ]
      // Spread the old list: Take "Apple" and "Banana" and append them.
      // Final Result: [ "Orange", "Apple", "Banana" ]
      // You effectively successfully added the new item to the front of the queue.
  }
  
  return (
      <div className='w-full h-screen flex'>
        <div 
          className='w-1/2 h-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(https://www.shutterstock.com/image-vector/abstract-artificial-intelligence-technology-concept-600nw-2616295187.jpg)'
          }}
        >
          
        </div>
        <div
            className="w-1/2 h-full flex justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://www.luxalgo.com/blog/content/images/2024/12/image-1734195241926.jpeg')`,
            }}
        >
          
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        <button type='button' className='w-full bg-blue-600 text-white mt-2 px-4 py-3 rounded-lg'
                          onClick={clear}
                        >
                          Clear
                        </button>
                    </form>
                    <div className='mt-4 w-full'>
                        <h3 className='text-white text-lg font-bold mb-2 text-center'>Conversion History</h3>
                        <ul className='w-full'>
                          {history.map((item, index) => (
                            <li key={index}
                              className='bg-white/30 backdrop-blur-sm text white p-2 mb-2 rounded-lg text-center font-medium'
                            >
                              {item}
                            </li>
                            
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default App
