import { ListCover } from "./ListCover";

export default function Lists() {
  return (
    <div className="mt-5 ">
      <div className="flex items-end mb-3 ">
        <div className="flex flex-col items-center justify-center font-satoshi-regular text-4xl mr-5">Lists</div>
        <div className="font-satoshi-light text-neutral-300">
          <span>Featured lists Popular lists By category Recently-updated</span>
        </div>
      </div>
      <ListCover title={"Popular Lists"} one={"1346f730-cfdc-4a06-a05a-533ae111f0a7"} two={"8429417b-4ca9-454e-bbbb-e4c822df3f74"} three={"d42cd481-c0f4-4dd5-a7da-20af33d02936"}/>
    </div>
  )
}
