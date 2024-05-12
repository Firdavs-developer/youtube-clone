/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export type IVideo = {
    id: string
    snippet: {
        title: string
        description: string
        thumbnails: {
            high: {
                url: string
            }
        }
    }
}
function Videos({ searchVedios }: { searchVedios: IVideo[] }) {
    const [ videos, setVedios ] = useState([])
    console.log(searchVedios);
    
    
    
    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyDB_ddJA1F_388dV303UxlkOlIOCv4xsS0").then(res => res.json()).then(data => setVedios(data.items))
    }, [])    
    return (
        <div className="ml-40">
            <div className="flex gap-5 flex-wrap">
                {searchVedios.length == 0  ? videos?.map((item: IVideo) => (
                    <Link key={item.id} to={`/${item.id}`} className="w-[380px] cursor-pointer">
                        <img className="w-full h-[200px]" src={item.snippet.thumbnails.high.url} alt="" />
                        <h1 className="text-xl font-bold">{item.snippet.title}</h1>
                        <p>{item.snippet.description.slice(0, 100)}</p>
                    </Link>)) :
                    searchVedios?.map((item: IVideo) => (
                        <Link key={item.id} to={`/${item.id}`} className="w-[380px] cursor-pointer">
                            <img className="w-full h-[200px]" src={item.snippet.thumbnails.high.url} alt="" />
                            <h1 className="text-xl font-bold">{item.snippet.title}</h1>
                            <p>{item.snippet.description.slice(0, 100)}</p>
                        </Link>                    
                    ))}
            </div>

        </div>
  )
}

export default Videos