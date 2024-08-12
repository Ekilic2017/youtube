import { useContext } from "react";
import SideBar from "../components/SideBar";
import { VideoContext } from "../context/videoContext";
import VideoCard from "../components/VideoCard";
const Feed = () => {
 const {videos ,isLoading,error} = useContext(VideoContext);
 console.log(isLoading);
  return (
  <div className="flex">
    <SideBar/>
    <div className="videos">
      {isLoading ?(<p>Yükleniyor...</p>)
      :error?(<p>error</p>):(
        videos?.map((item)=>item.type==="video"&&<VideoCard video={item}
        key={item.videoId}/>)
        )}
    </div>S
  </div>
  );
};

export default Feed;