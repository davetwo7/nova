import LargeHeader from "../LargeHeader";

type ListCoverProps = {
  title: string
}

export const ListCover = ({ title }: ListCoverProps) => {

  const sampleOne = "1346f730-cfdc-4a06-a05a-533ae111f0a7";
  const sampleTwo = "8429417b-4ca9-454e-bbbb-e4c822df3f74";
  const sampleThree = "d42cd481-c0f4-4dd5-a7da-20af33d02936";

  return (
    <div>
      <LargeHeader title={title} />
      <div className="flex flex-wrap">
        <div className="flex gap-5 items-center mt-5">
          <div className="relative h-36 w-36 mr-5">
            <img
              src={`https://coverartarchive.org/release-group/${sampleOne}/front-500`}
              className="absolute w-28 h-28 bottom-5 left-5 border border-neutral-500/20"
            ></img>
            <img
              src={`https://coverartarchive.org/release-group/${sampleTwo}/front-500`}
              className="absolute w-28 h-28 bottom-2.5 left-2.5 border border-neutral-500/20"
            ></img>
            <img
              src={`https://coverartarchive.org/release-group/${sampleThree}/front-500`}
              className="absolute w-28 h-28 bottom-0 left-0 border border-neutral-500/20"
            ></img>
          </div>
          <button className="flex gap-5 bg-neutral-800 items-center p-8 rounded-md hover:bg-neutral-700/90 transition-colors duration-100">
            <div className="bg-neutral-200 rounded-full w-14 h-14"></div>
            <div className="font-satoshi-regular text-2xl">
              obscure or lesser known postpunk/goth gem...
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
