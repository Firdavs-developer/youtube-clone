import { useEffect, useState } from "react"

type IVideo = {
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
function Videos() {
    const [ videos, setVedios ] = useState([])
    
    
    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyDB_ddJA1F_388dV303UxlkOlIOCv4xsS0").then(res => res.json()).then(data => setVedios(data.items))
    }, [])    
    console.log(videos);
    return (
        <div>
        <div className="flex gap-5 flex-wrap">
            {videos?.map((item: IVideo) => (
                <div className="w-[380px] cursor-pointer">
                    <img className="w-full h-[200px]" src={item.snippet.thumbnails.high.url} alt="" />
                    <h1 className="text-xl font-bold">{item.snippet.title}</h1>
                    <p>{item.snippet.description.slice(0, 100)}</p>
                </div>
                
            ))}
        </div>

    </div>
  )
}

export default Videos