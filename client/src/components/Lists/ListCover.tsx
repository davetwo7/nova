import LargeHeader from "../LargeHeader";

export const ListCover = ({title, one, two, three}) => {
  const testImg1 =
    "https://ia803405.us.archive.org/9/items/mbid-695060cc-1a85-4dc9-8e85-aa50b74964ef/mbid-695060cc-1a85-4dc9-8e85-aa50b74964ef-6304189097_thumb500.jpg";
  const testImg2 =
    "https://ia601408.us.archive.org/6/items/mbid-6d50b672-4f8e-4b7a-917b-1ded22808632/mbid-6d50b672-4f8e-4b7a-917b-1ded22808632-33115391771_thumb500.jpg";
  const testImg3 =
    "http://coverartarchive.org/release/97476051-08f6-4f53-a03b-47f022856cb8/11947298695-500.jpg";

    const ph = 'https://coverartarchive.org/release-group/${testMbid}/front-500'

  let lists = [1,2,2,2,2,2,2,2,2,2];

  return (
    <div>
      <LargeHeader title={title}/>
      <div className="flex flex-wrap">
        {lists.map((elem, index) => {
          if (index === 4) {
            return <div className="flex gap-5 items-center mt-5">
            <div className="relative h-36 w-36 mr-5">
              <img src={`https://coverartarchive.org/release-group/${one}/front-500`} className="absolute w-28 h-28 bottom-5 left-5 border border-neutral-500/20"></img>
              <img src={`https://coverartarchive.org/release-group/${two}/front-500`} className="absolute w-28 h-28 bottom-2.5 left-2.5 border border-neutral-500/20"></img>
              <img src={`https://coverartarchive.org/release-group/${three}/front-500`} className="absolute w-28 h-28 bottom-0 left-0 border border-neutral-500/20"></img>
            </div>
            <button className="flex gap-5 bg-neutral-800 items-center p-8 rounded-md hover:bg-neutral-700/90 transition-colors duration-100">
              <div className="bg-neutral-200 rounded-full w-14 h-14"></div>
              <div className="flex justify-center flex-col items-start flex-wrap w-fit">
                <div className="font-satoshi-regular text-2xl">drake albums ranked from worst to wors...</div>
                <div className="font-satoshi-light text-md">test test test test test test test test test test test test test test test test test</div>
              </div>
            </button>
          </div>
          }
          return <div className="flex gap-5 items-center mt-5">
          <div className="relative h-36 w-36 mr-5">
            <img src={`https://coverartarchive.org/release-group/${one}/front-500`} className="absolute w-28 h-28 bottom-5 left-5 border border-neutral-500/20"></img>
            <img src={`https://coverartarchive.org/release-group/${two}/front-500`} className="absolute w-28 h-28 bottom-2.5 left-2.5 border border-neutral-500/20"></img>
            <img src={`https://coverartarchive.org/release-group/${three}/front-500`} className="absolute w-28 h-28 bottom-0 left-0 border border-neutral-500/20"></img>
          </div>
          <button className="flex gap-5 bg-neutral-800 items-center p-8 rounded-md hover:bg-neutral-700/90 transition-colors duration-100">
            <div className="bg-neutral-200 rounded-full w-14 h-14"></div>
            <div className="font-satoshi-regular text-2xl">obscure or lesser known postpunk/goth gem...</div>
          </button>
        </div>
        })}

        {/* <div className="flex gap-5 items-center mt-5">
          <div className="relative h-36 w-36 mr-5">
            <img src={`https://coverartarchive.org/release-group/${one}/front-500`} className="absolute w-28 h-28 bottom-5 left-5 border border-neutral-500/20"></img>
            <img src={`https://coverartarchive.org/release-group/${two}/front-500`} className="absolute w-28 h-28 bottom-2.5 left-2.5 border border-neutral-500/20"></img>
            <img src={`https://coverartarchive.org/release-group/${three}/front-500`} className="absolute w-28 h-28 bottom-0 left-0 border border-neutral-500/20"></img>
          </div>
          <button className="flex gap-5 bg-neutral-800 items-center p-8 rounded-md hover:bg-neutral-700/90 transition-colors duration-100 w-100">
            <div className="bg-neutral-200 rounded-full w-14 h-14"></div>
            <div className="font-satoshi-regular text-2xl">drake albums ranked from worst to wors...</div>
          </button>
        </div> */}
      </div>
    </div>
  );
};
