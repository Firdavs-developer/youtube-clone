import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Videos from "./components/Videos"
import VedioDetail from "./components/VedioDetail"


function App() {

  return (
    <>
      <Header/>
      <div className="max-w-[95%] mx-auto">
        <div className="flex gap-1">
          <SideBar/>
          <Routes>
            <Route path="/" element={<Videos/>}/>
            <Route path="/:id" element={<VedioDetail/>}/>
          </Routes>
          {/* <Videos/> */}
        </div>
      </div>
      
    </>
  )
}

export default App
