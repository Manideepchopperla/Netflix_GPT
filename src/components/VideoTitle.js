
const VideoTitle = (props) => {
    const {title,overview} = props 

  return (
    <div className="w-[95vw] aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold " >{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4" >{overview}</p>
      <div className="my-4 md:m-0" >
        <button className=" bg-white text-black py-1 md:py-3  md:px-9 text-xl  rounded-lg hover:bg-opacity-80" type="button" >► Play</button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 p-3 px-9  text-white text-xl bg-opacity-50 rounded-lg" >ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
