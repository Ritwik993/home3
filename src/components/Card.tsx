import Image from "next/image";

const Card=()=>{
    return(
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-[80px] bg-[#EDFAFE] shadow-xl  rounded-[13px] pl-[30px] md:pt-[80px] md:pr-[100px] pr-[40px] md:pb-[80px] md:mt-[60px] mt-[20px] ml-[20px] mr-[20px] md:ml-0 md:mr-0 pt-[40px] pb-[40px] md:w-auto w-[80vw]">
            <div className="md:w-[400px] w-auto">
                <h2 className="text-[#423C65] leading-[34px] font-semibold text-[26px] text-left">World’s largest eCommerce and DTC only database</h2>
                <p className="text-[#545262] text-[16px] mt-[20px] text-left">BrandNav is the most complete and up-to-date database of more than 14.5 million eCommerce leads that you can use to find your next client. BrandNav offers over 30+ filters to help users build highly segmented lists for better prospecting.</p>
            </div>
            <div>
                <Image src="/image 1.svg" alt="" width={400} height={314} className="object-cover"/> 
            </div>
        </div>
    )
}

export default Card;