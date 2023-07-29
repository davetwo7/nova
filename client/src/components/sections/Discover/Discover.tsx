import { Navigate } from "react-router-dom";
import { useState } from "react";

const Discover = () => {
  const [goToMap, setGoToMap] = useState(false)
  const [goToList, setGoToList] = useState(false)

  if (goToMap) {
    return <Navigate to="/discover/map"/>
  }
  if (goToList) {
    return <Navigate to="/discover/list"/>
  }

  return (
    <div className="text-md font-bold flex gap-5 mx-2">
        <button onClick={() => setGoToMap(true)} className="map-button flex-1 bg-sky-500 rounded-full hover:bg-sky-600 transition-colors duration-150 ease-in-out">
         Map
        </button>
        <button onClick={() => setGoToList(true)}className="list-button flex-1 bg-sky-500 rounded-full hover:bg-sky-600 transition-colors duration-150 ease-in-out">
         List
        </button>
    </div>
  )
}


export default Discover;