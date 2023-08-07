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
      <ListCover title={"Popular Lists"}/>
    </div>
  )
}
