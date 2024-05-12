import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Videos from "./components/Videos"


function App() {

  return (
    <>
      <Header/>
      <div className="max-w-[95%] mx-auto">
        <div className="flex gap-36 justify-between">
          <SideBar/>
          <Videos/>
        </div>
      </div>
    </>
  )
}

export default App
