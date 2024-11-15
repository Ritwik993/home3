import Image from "next/image";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

const BenefitSection=()=>{
    return(
        <div className="flex flex-col items-center text-center justify-center mt-[100px] ">
            <h1 className="font-bold md:text-[36px] text-[28px] md:text-center text-left text-[#2F327D] md:w-[860px]  md:pl-0 pl-[20px] w-[80vw]">3 key differences that make BrandNav the world’s ultimate eCommerce leads database</h1>
            <Card/>
            <Card2/>
            <Card3/>
            <button className="text-white text-medium text-[16px] bg-[#0084FF] p-[10px] md:w-[175px] rounded-[5px] md:ml-[8px] shadow-xl mt-[30px] w-[80vw]">Grab free leads</button>
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

export default BenefitSection;