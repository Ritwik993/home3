import Image from "next/image";

const VideoTutorials=()=>{
    return(
        <div className="flex flex-col items-center justify-center">
        <Image src="/demo4.svg" className="object-cover md:block hidden" alt="" width={1080} height={719} />
        <Image src="/demo5.svg" className="object-cover block md:hidden" alt="" width={328} height={1180} />
        </div>
    )
}

export default VideoTutorials;