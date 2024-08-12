import { useSearchParams } from "react-router-dom"
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react";
import api from "../utils/api";
import VideoCard from "../components/VideoCard";

const Results = () => {
    const [page,setPage]=useState(1);
    const [token,setToken]=useState();
    const [data,setData]=useState([]);
    const [seacrhParams]=useSearchParams();
   const query= seacrhParams.get("search_query");
 useEffect(()=>{
    const params={
        query:query,
       token:page > 1 ? token :undefined,
    };
    api.get("/search",{params}).then((res)=>{
        setToken(res.data.continuation);
        setData((prev)=>prev.concat(res.data.data));
    });
 },[query,page])  ;
  return (
    <div className="flex gap-3">
        <SideBar/>
        <div className="overflow-auto mx-auto h-[90vh]">
            <h2 className="text-xl">
                <span>{query}</span>  için sonuçlar
            </h2>
            <div className="flex flex-col justify-center">
                {data.map((item)=>item.type==="video" && (
                <VideoCard key={item.id} video={item} isRow={true}/>
            ))}
            <button onClick={()=>setPage(page+1)}
            className="bg-zinc-600 py-2 px-5 rounded-md my-10 mx-auto hover:bg-zinc-900">Daha Fazla..</button>
            </div>
        </div>
    </div>
  )
}

export default Results