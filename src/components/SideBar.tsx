import { Link } from "react-router-dom"
function SideBar() {
  return (
    <div className="w-[300px] ">
        <ul>
            <li ><Link className="text-xl focus:text-[#FF0000]" to="/">Home</Link></li>
            <li className="my-4"><Link className="text-xl focus:text-[#FF0000]"  to="/channels">Channels</Link></li>
        </ul>
    </div>
  )
}

export default SideBar