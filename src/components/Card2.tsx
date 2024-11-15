import Image from "next/image";

const Card2=()=>{
    return(
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-[80px] pt-[40px] pb-[40px] bg-[#EDFAFE] shadow-xl  rounded-[13px] pl-[30px] md:pt-[80px] md:pr-[100px] pr-[40px] md:pb-[80px] md:mt-[60px] mt-[20px] ml-[20px] mr-[20px] md:ml-0 md:mr-0 md:w-auto w-[80vw]">
            <div className="md:w-[400px] w-auto">
                <h2 className="text-[#423C65] leading-[34px] font-semibold text-[26px] text-left">Decision-makers contact information</h2>
                <p className="text-[#545262] text-[16px] mt-[20px] text-left">BrandNav allows you to find up-to-date verified contact information of the decision makers in your leads list. BrandNav Enricher gives you access to multiple data points. Here are some of the data points you get with BrandNav: Name, Job Title, Work Email, Phone Number, Social Media URLs and much more.</p>
            </div>
            <div>
                <Image src="/image 2.svg" alt="" width={400} height={314} className="object-cover"/> 
            </div>
        </div>
    )
}

export default Card2;