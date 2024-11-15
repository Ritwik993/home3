import Image from "next/image";

const HeroSection=()=>{
    return(
        <div className="flex flex-col items-center justify-center text-center mb-[60px]">
            <p className="text-[#0084FF] md:mb-[40px] mb-[30px] text-[16px] md:text-[20px] ">Find fast-growing brands, not low quality stores</p>
            <div className="relative md:mb-[40px] mb-[30px]">
                <p className="text-[#2F327D] font-bold md:text-[56px] text-[32px] md:leading-[70px] leading-[42px]">A Store Leads Alternative,<br/><span className="text-[#0084FF]"> 10X Better </span>in Every Way</p>
                <Image src="/line.png" width={340} height={31} alt="" className="absolute top-[70px] hidden md:block "/>
                <Image src="/line2.png" width={150} height={18} alt="" className="absolute md:hidden block top-[42px] left-[68px]"/>
            </div>
            <div>
            <p className="text-[#595B97] md:text-[18px] text-[16px] font-regular md:mb-[50px] mb-[30px]" >Discover untapped eCommerce brands with our high-quality unsaturated leads database</p>
            <input type="text" placeholder="Enter your email" className=" py-[10px] px-[20px] bg-white md:w-[370px] w-[80vw] outline-none border border-[#9CB4EB] rounded-[8px] shadow-md mb-[40px] md:mb-0"/>
            <button className="text-white text-medium text-[20px] bg-[#0084FF] py-[8px] px-[20px] md:w-[216px] w-[80vw] rounded-[8px] md:ml-[8px] shadow-xl">Grab free leads</button>
            </div>
            
            <div className="flex mt-[20px] md:flex-row flex-col items-center justify-center " >
            <div className="flex gap-1 items-center md:mt-0 mt-[10px]">
                <Image src="/FREE.png" width={18} height={18} alt="" className="w-[18px] h-[18px]"/>
                <p className="text-[#595B97] text-[14px] font-medium ">5,000 free leads included <span className="hidden md:inline-block pr-[5px]"> | </span></p>
            </div>
            <div className="flex gap-1 items-center md:mt-0 mt-[10px]">
                <Image src="/box.png" width={16} height={12} alt="" className="w-[16px] h-[12px]"/>
                <p className="text-[#595B97] text-[14px] font-medium">No credit card required </p>
            </div>
            </div>
        </div>

    )
}

export default HeroSection;