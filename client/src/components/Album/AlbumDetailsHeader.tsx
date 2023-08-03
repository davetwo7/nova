

export default function AlbumDetailsHeader() {
  return (
    <div>
      <div className="border-b border-rose-50/20 text-rose-50 h-12 flex justify-around items-stretch mb-0.5">
        <button className="font-satoshi-light flex-grow h-full text-lg text-rose-50 bg-neutral-700 w-full hover:bg-neutral-800 hover:text-neutral-100 hover:font-bold transition-colors duration-200 rounded-tl-lg border-r border-rose-50/20">
          Reviews
        </button>
        <button className="font-satoshi-light flex-grow h-full text-lg text-rose-50 bg-neutral-700 w-full hover:bg-neutral-800 hover:text-neutral-100 hover:font-bold  transition-colors duration-200 border-x border-rose-50/20">
          Overview
        </button>
        <button className="font-satoshi-light flex-grow h-full text-lg text-rose-50 bg-neutral-700 w-full hover:bg-neutral-800 hover:text-neutral-100 hover:font-bold  transition-colors duration-200 rounded-tr-lg border-l border-rose-50/20">
          {"Comments (5432)"}
        </button>
      </div>
    </div>
  );
}
