import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
const Comments = ({data}) => {
  console.log(data)
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data?.commentsCount}</h2>
    <input type="text" className="w-full bg-transparent outline-none mb-5 
    p-2 border-b "
    placeholder="Yorum Ekleyiniz"/>
{data?.data?.map((i,index)=>(
<div  key={index}className="flex gap-2 items-center 
px-1 py-4">
  <img src={i.authorThumbnail[0].url}
  className="rounded-full" alt="" />
  <div className="flex flex-col gap-2">
    <h5 className="flex gap-2 items-center">
      <span className="font-semibold">{i.authorText}</span>
      <span className="text-sm text-gray-300">{i.publishedTimeText}</span>
      </h5>
      <p>{i.textDisplay}</p>
      <div className="flex items-center gap-5">
      <div className="flex gap-1 items-center hover:bg-gray-700 rounded p-2 cursor-pointer">
      <AiFillLike />
      <span>{i?.likesCount}</span>
      </div>
      <div className="hover:bg-gray-700 p-1 rounded selection:cursor-pointer">
        <AiFillDislike />
        </div>
        <span className="hover:bg-gray-700 p-1 rounded cursor-pointer">Yanıtla</span>
       
  </div>
  {i.replyCount>0 && (
     <div className="flex items-center p-1 gap-2 w-fit text-blue-500 cursor-pointer hover:bg-[#112630]"><FaArrowDown />{i.replyCount} Yanıt</div>
        )}
  </div>
</div>
))}
    </div>
  );
};

export default Comments;