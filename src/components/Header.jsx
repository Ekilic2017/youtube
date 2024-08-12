import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
const Header = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const text=e.target[0].value;
    if(text.trim()==="")return;
    navigate(`/results?search_query=${text}`)
  };
  return (
  <header className="flex justify-between items-center p-4">
    <Link className="flex items-center gap-2" to="/">
    <img className="w-[50px] "src="logo.png"/>
    <h1 className="text-2xl font-mono max-sm:hidden">Youtube</h1>
    </Link>
    <form onSubmit={handleSubmit} className= " group flex border border-gray-500 rounded-[20px] overflow-hidden">
      <input type="text" placeholder="Ara..." className="bg-black py-1 px-5 outline-none group-hover:border-blue-500 group-hover:border border rounden-l-[20px]
      focus:border-blue-500"></input>
      <button className="px-4 text-2xl bg-zinc-600">
      <FaSearch />
      </button>
    </form>
    
    <div className="flex gap-3 text-xl cursor-pointer">
    <FaBell className="hover:text-gray-400 transition duration-250ms"/>
    <IoVideocamSharp className="hover:text-gray-400 transition duration-250ms" />
    <MdVideoLibrary className="hover:text-gray-400 transition duration-250ms" />
    </div>
  </header>
  )
}

export default Header;