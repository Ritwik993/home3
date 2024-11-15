import Image from "next/image"
import GiftCard from "./GiftCard";

const Banner2=()=>{
    return(      
      <div className="imageContainer relative w-[100vw] flex flex-col justify-center items-center mt-[100px] ">
      <Image src="/banner.png" alt="" width={1280} height={912} className="w-[100vw] md:h-[912px] h-[1102px]"/>
      <div className="absolute md:top-1/6 top-[100px] flex flex-col-reverse  md:flex-row justify-around items-center md:pl-[200px] md:pr-[100px] pl-[60px] pr-[50px] w-[100vw] max-w-[1536px] m-auto">
        <div >
          <GiftCard/>
        </div>
        <div className="hidden md:block text-center">
          <p className="font-semibold md:text-[40px] text-[30px] text-[#2F327D] md:mb-[0px] mb-[20px]">Not convinced yet ?<br className="hidden md:block"/>
             <span className="font-bold md:text-[44px] text-[32px]">Take it for a <span className="text-[#0084FF]">FREE</span> spin</span><br/>before committing</p>
        </div>
        <div className="md:hidden block text-center">
          <p className="font-semibold text-[28px] text-[#2F327D] md:mb-[0px] mb-[20px]">Act Fast!<br/>
             <span className="font-bold">Take it for a <span className="text-[#0084FF]">FREE</span> spin</span><br/>right away</p>
        </div>
      </div>
    </div>
    )
}

export default Banner2;