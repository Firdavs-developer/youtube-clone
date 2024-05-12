import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Videos, { IVideo } from "./components/Videos"
import VedioDetail from "./components/VedioDetail"
import { useState } from "react"


function App() {
  const [ searchVedios, setSearchVedios ] = useState<IVideo[]>([])

  return (

    <>
      <Header searchVedios={searchVedios} setSearchVedios={setSearchVedios}/>
      <div className="max-w-[95%] mx-auto">
        <div className="flex gap-1">
          <SideBar/>
          <Routes>
            <Route path="/" element={<Videos searchVedios={searchVedios}/>}/>
            <Route path="/:id" element={<VedioDetail/>}/>
          </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App
