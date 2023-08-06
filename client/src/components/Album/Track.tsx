
const Track = ({track}) => {

  console.log('track in track: ', track)
  if (Object.entries(track).length < 1) {
    return <div>test</div>;
  }

  return (
    <div className="flex items-center w-full text-base font-satoshi-variable">
      <div className="grow-0 w-fit pr-2 pl-1 justify-center">{track.track_number}</div>
      <div className="grow-1 w-full pl-2 hover:text-rose-500 transition-colors duration-100">{track.track_name}</div>
      <div className="grow-0 w-fit px-2">10</div>
    </div>
  )
}

export default Track;