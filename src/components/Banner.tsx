import Image from "next/image";

const Banner=()=>{
    return(
        <div className="mt-[100px] bg-gradient-to-r from-[#240036] to-[#003252] md:px-[50px] px-[30px] py-[50px] rounded-[8px] flex flex-col  items-center justify-center text-center md:w-auto w-[80vw]">
            <h1 className="text-white font-bold md:text-[38px] text-[30px] md:leading-[60px] leading-[35px] ">Ready to close more deals for your business?</h1>
            <h2 className="text-[28px] text-[#B4B4B4] leading-[26px] mt-[30px]">Join the thousands of business that made the switch to BrandNav!</h2>
            <div>
            <input type="text" placeholder="Enter your email" className=" py-[10px] px-[20px] bg-white md:w-[370px] w-[70vw] outline-none border border-[#9CB4EB] rounded-[8px] shadow-md mb-[20px] md:mb-0 mt-[40px]"/>
            <button className="text-white text-medium text-[20px] bg-[#0084FF]  py-[8px] px-[20px] md:w-[216px] rounded-[8px] md:ml-[8px] shadow-md w-[70vw]">Grab free leads</button>
            </div>
            
            <div className="flex mt-[10px] md:flex-row flex-col items-center justify-center " >
            <div className="flex gap-1 items-center md:mt-0 mt-[10px]">
                <Image src="/1.svg" width={18} height={18} alt="" className="w-[18px] h-[18px]"/>
                <p className="text-white text-[14px] font-medium">5,000 free leads included <span className="hidden md:inline-block pr-[5px]"> | </span></p>
            </div>
            <div className="flex gap-1 items-center md:mt-0 mt-[10px]">
                <Image src="/2.svg" width={16} height={12} alt="" className="w-[16px] h-[12px]"/>
                <p className="text-white text-[14px] font-medium">No credit card required </p>
            </div>
            </div>
        </div>
    )
}

export default Banner;