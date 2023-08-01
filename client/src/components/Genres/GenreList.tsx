import { Link } from "react-router-dom";
import LargeHeader from "../LargeHeader";


const GenreList = () => {

  return (
    <div>
      <LargeHeader title={"Pop"}/>
      {/* <div className="">Sample text in a carousel</div> */}
      <div className="flex gap-4 items-center border-b border-rose-50/20 hover:">
        <div className="bg-neutral-800 rounded-full h-10 w-10"></div>
        <p className="bg-neutral-900 font-satoshi-regular py-4 text-lg my-1 text-rose-100">This is a test for the text that will eventually be here.</p>
        <p className="font-satoshi-light text-neutral-500">Gemini Rights by Steve Lacy</p>
      </div>
      <div className="bg-neutral-900 h-64 w-36"></div>
    </div>
  )
}


export default GenreList;