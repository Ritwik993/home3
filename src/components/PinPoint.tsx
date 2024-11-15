import Image from "next/image"
import Review2 from "./Review2";

const PinPoint=()=>{
    return(
      <div className="flex flex-col items-center justify-center ">
          <div className="md:text-center text-left mt-[100px] ">
        <p className="font-bold md:text-[36px] text-[20px] text-[#2F327D] md:text-center text-left">Pinpoint your ideal customer with<br/> relevant data attributes</p>
        <p className="text-[#007DF2] font-semibold md:text-[24px] text-[20px] mt-[40px] text-center mb-[20px]">Screener attributes</p>
        </div>
        <div className="hidden md:flex gap-[110px] justify-center  px-[200px] w-[100vw] ">
          <div className="text-center flex flex-col items-center  gap-y-[10px] ">
            <Image src="/fin.svg" width={70} height={70} alt="" className="w-[70px] h-[70px]" />
            <p className="text-[20px] font-semibold text-[#2F327D]">Financials</p>
          </div>
          <div className="text-center flex flex-col items-center  gap-y-[10px] ">
            <Image src="/Group 1000001992.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company Name <br/>& Website</p>
          </div>
          <div className="text-center flex flex-col items-center  gap-y-[10px] ">
            <Image src="/Group 1000001992 (1).svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company <br/>location </p>
          </div>
          <div className="flex flex-col items-center  gap-y-[10px] ">
            <Image src="/3.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
        </div>

        <div className="md:hidden  grid grid-cols-2  w-[100vw] gap-y-16">
          <div className=" text-center flex flex-col items-center">
            <Image src="/Group 1000001990.svg" width={70} height={70} alt="" />
            <p className="text-[20px] font-semibold text-[#2F327D]">Financials</p>
          </div>
          <div className="text-center flex flex-col items-center ">
            <Image src="/Group 1000001992.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company Name <br/>& Website</p>
          </div>
          <div className="text-center flex flex-col items-center ">
            <Image src="/Group 1000001992 (1).svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Company <br/>location </p>
          </div>
          <div className="flex flex-col items-center ">
            <Image src="/3.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Country code </p>
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-[110px] w-[100vw] items-center px-[350px] mt-[20px]">
          <div className="flex flex-col items-center gap-y-[10px]">
            <Image src="/4.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Employee count</p>
          </div>
          <div className="flex flex-col items-center  gap-y-[10px]">
            <Image src="/5.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Industry </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-[10px] ">
            <Image src="/6.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">and 20+ more </p>
          </div>
          </div>

          <div className="md:hidden grid grid-cols-2 w-[100vw] ">
          <div className="flex flex-col items-center justify-center mt-[64px]">
            <Image src="/4.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Employee count</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-[64px]">
            <Image src="/5.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">Industry </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-[64px] ">
            <Image src="/6.svg" width={70} height={70} alt=""/>
            <p className="text-[20px] font-semibold text-[#2F327D]">and 20+ more </p>
          </div>
          </div>
          <Review2/>
      </div>
    )
}

export default PinPoint;