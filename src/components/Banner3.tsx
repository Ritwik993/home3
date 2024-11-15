import Image from "next/image";

const Banner3=()=>{
    return(
        <div className="bg-gradient-to-r from-[#000645] to-[#1C2268] md:w-[1000px] w-[90vw]  flex flex-col justify-center items-center rounded-[15px] mt-[100px] text-cneter">
            <h2 className="text-white mt-[20px] font-bold md:text-[36px] text-[28px] text-center">Watch BrandNav in action</h2>
            <p className="text-white text-[16px] font-medium md:w-[662px] mt-[20px] text-center w-[80vw]">Leverage 30+ advanced filters to create eCommerce lead lists and streamline your sales and marketing efforts.</p>
            <Image src="/video2.svg" alt="" width={917} height={530} className="object-cover mt-[20px]"/>
            
            
            
            <div className="flex mt-[10px] md:flex-row flex-col items-center justify-center mb-[20px] " >
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

export default Banner3;