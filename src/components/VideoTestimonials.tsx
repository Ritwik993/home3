import Image from "next/image";

const VideoTestimonials=()=>{
   return(
     <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-[36px] text-[#2F327D] leading-[48px] mb-[20px] md:w-[700px] w-[90vw]">BrandNav reviews by users and  content creators</h1>
        <p className="text-[16px] font-medium text-[#595B97]">Non-incentivized reviews from real users and content creators</p>
        <div className="videoContainer flex md:flex-row flex-col justify-between items-center mt-[20px]">
            <Image src="/vid 1.png" alt="" width={347} height={195} className=""/>
            <Image src="/vid 2.png" alt="" width={347} height={195} className=""/>
            <Image src="/vid 3.png" alt="" width={347} height={195} className=""/>
        </div>

        <button className="text-white text-medium text-[16px] bg-[#0084FF] p-[10px] md:w-[175px] rounded-[5px] md:ml-[8px] shadow-xl mt-[30px] w-[90vw]">Grab free leads</button>
            <div className="flex mt-[10px] md:flex-row flex-col items-center justify-center" >
            <div className="flex gap-1 items-center md:mt-0 mt-[10px]">
                <Image src="/FREE.png" width={18} height={18} alt="" className="w-[18px] h-[18px]"/>
                <p className="text-[#595B97] text-[14px] font-medium">5,000 free leads included <span className="hidden md:inline-block pr-[5px]"> | </span></p>
            </div>
            <div className="flex gap-1 items-center md:mt-0 mt-[10px]">
                <Image src="/box.png" width={16} height={12} alt="" className="w-[16px] h-[12px]"/>
                <p className="text-[#595B97] text-[14px] font-medium">No credit card required </p>
            </div>
            </div>
    </div>
   )
}
export default VideoTestimonials;