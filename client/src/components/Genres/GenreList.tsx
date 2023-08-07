import LargeHeader from "../LargeHeader";


const GenreList = () => {

  return (
    <div>
      <LargeHeader title={"Pop"}/>
      {/* <div className="">Sample text in a carousel</div> */}
      <div className="flex gap-4 items-center border-b border-rose-50/20 hover:">
        <div className="bg-neutral-800 rounded-full h-10 w-10"></div>
        <p className="bg-neutral-900 font-satoshi-regular py-4 text-lg my-1 text-rose-100">(User Review/User Review/User Review/User Review/User Review)</p>
        <p className="font-satoshi-light text-neutral-500">Camille 2000 by Piero Piccioini</p>

      </div>
      <div className="my-2 flex gap-10 py-4">
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
      </div>
      {/* <div className="bg-neutral-900 h-64 w-36"></div> */}
      <LargeHeader title={"Rock"}/>
      {/* <div className="">Sample text in a carousel</div> */}
      <div className="flex gap-4 items-center border-b border-rose-50/20 hover:">
        <div className="bg-neutral-800 rounded-full h-10 w-10"></div>
        <p className="bg-neutral-900 font-satoshi-regular py-4 text-lg my-1 text-rose-100">(User Review/User Review/User Review/User Review/User Review)</p>
        <p className="font-satoshi-light text-neutral-500">Camille 2000 by Piero Piccioini</p>

      </div>
      <div className="my-2 flex gap-10 py-4">
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
        <div className="w-48 h-48 bg-neutral-800 flex justify-center items-center text-3xl">
          AA
        </div>
      </div>
      <div className="bg-neutral-900 h-64 w-36"></div>
    </div>
  )
}


export default GenreList;