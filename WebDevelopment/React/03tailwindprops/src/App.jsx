import Card from "./components/Card"

export default function App() {
  let myObj = {
    username: 'mukesh',
    id: 1
  }

  let arr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 font-bold text-2xl rounded-xl text-white p-4 m-10 ml-50 mr-50 text-center">Tailwind CSS</h1>
      <Card username={myObj.username} btnText='Click Me' />
      <Card username="Jenny" />
    </>
  )
}