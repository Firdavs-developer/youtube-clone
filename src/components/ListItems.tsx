import { useState, useEffect } from "react";
import { IVideo } from "./Videos";
import { Link } from "react-router-dom"
function ListItems({ searchVedios} : { searchVedios: IVideo[] }) {
    const [ videos, setVedios ] = useState([])
    
    
    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyDB_ddJA1F_388dV303UxlkOlIOCv4xsS0").then(res => res.json()).then(data => setVedios(data.items))
    }, []) 

  return (
    <div>
        <div>
            {searchVedios.length == 0  ? videos?.map((item: IVideo) => (
                <Link key={item.id} to={`/${item.id}`} className="w-[380px] cursor-pointer flex gap-5 my-5">
                    <img className="w-[150px] h-[100px]" src={item.snippet.thumbnails.high.url} alt="" />
                    <div>
                        <h1 className="text-xl font-bold">{item.snippet.title.slice(0, 10)}</h1>
                        <p>{item.snippet.description.slice(0, 50)}</p>
                    </div>

                </Link>
            )) : searchVedios?.map((item: IVideo) => (
                <Link key={item.id} to={`/${item.id}`} className="w-[380px] cursor-pointer flex gap-5 my-5">
                    <img className="w-[150px] h-[100px]" src={item.snippet.thumbnails.high.url} alt="" />
                    <div>
                        <h1 className="text-xl font-bold">{item.snippet.title.slice(0, 10)}</h1>
                        <p>{item.snippet.description.slice(0, 50)}</p>
                    </div>

                </Link>
            ))}
        </div>
    </div>
  )
}

export default ListItems