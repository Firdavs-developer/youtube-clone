import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom"
import ListItems from "./ListItems"

type IVideo = {
  id: string,
  snippet: {
      title: string,
      description: string, 
      channelTitle: string,
      thumbnails: {
          high: {
              url: string
          }
      }
}
}

function VedioDetail() {

    const [ video, setVedio ] = useState([]);
    const { id } = useParams();
useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDB_ddJA1F_388dV303UxlkOlIOCv4xsS0`).then(res => res.json()).then(data => setVedio(data.items))

}, [id])
  
  return (
    <div className="flex items-start gap-[30px]">
      <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
        {video.map((item: IVideo) => (
          <div key={item.id} className="my-5">
            <h1 className="text-xl font-bold w-[650px]">{item.snippet.title}</h1>
            <div className="flex gap-5 items-center">
              <img className="w-[40px] h-[40px] rounded-[50%] my-3" src={item.snippet.thumbnails.high.url} alt="" />
              <h2 className="text-lg font-medium">{item.snippet.channelTitle}</h2>
            </div>
          </div>

        ))}
      </div>
      <ListItems/>

    </div>
  )
}

export default VedioDetail