import Image from "next/image";

const Review2=()=>{
    return(
        <div className="flex gap-[50px] bg-white p-[20px] md:pr-[80px] pr-[20px] shadow-md rounded-[12px] mt-[100px] md:w-auto w-[90vw]">
            <Image src="/avatar1.svg" alt="" width={100} height={100} className="object-cover rounded-full w-[60px] h-[60px] md:w-[100px] md:h-[100px]"/>
            <div className="flex flex-col  gap-2">
                <div className="flex justify-between">
                    <h3 className="text-[#2F327D] font-semibold md:text-[18px] text-[15px] ">Highly recommended if you're looking to get Ecom leads!</h3>
                    <Image src="/Group.png" alt="" width={90} height={16} className="object-contain hidden md:block"/>
                </div>
                <p className="text-[13px] text-[#2F327D] leading-[20px]">“Helps me scrape my target audience data with ease... Low effort, amazing results. Saves a lot of time and manual work”</p>
                <p className="font-medium text-[14px] text-[#2F327D]">Sairaj Matkar</p>
                
            </div>
        </div>
    )
}

export default Review2;