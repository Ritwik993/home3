import Image from "next/image"

const Questions=()=>{
    return(
        <div className=" w-[100vw]  flex  items-center justify-center flex-col py-[60px] text-center">
      <p className="text-[#2F327D] font-bold text-[36px]">Got a Question?<br/>
      Get Your Answers</p>
      <div className=" bg-white md:w-1/2 w-3/4 mt-[50px] mb-[50px] rounded-lg border-none shadow-lg max-w-[1536px] m-auto">
    
       <div className="md:pl-[60px] pl-[20px] md:pr-[20px] pr-[5px] py-[20px] flex justify-between items-center  border-none  ">
        <p className="text-[#616161] md:text-[16px] text-[12px]  font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] md:text-[24px] text-[15px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>


    
        <div className="md:pl-[60px] pl-[20px] md:pr-[20px] pr-[5px] py-[20px] flex justify-between items-center  border-none  ">
        <p className="text-[#616161] md:text-[16px] text-[12px]  font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] md:text-[24px] text-[15px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>

        <div className="md:pl-[60px] pl-[20px] md:pr-[20px] pr-[5px] py-[20px] flex justify-between items-center  border-none  ">
        <p className="text-[#616161] md:text-[16px] text-[12px]  font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] md:text-[24px] text-[15px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>

        <div className="md:pl-[60px] pl-[20px] md:pr-[20px] pr-[5px] py-[20px] flex justify-between items-center  border-none  ">
        <p className="text-[#616161] md:text-[16px] text-[12px]  font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] md:text-[24px] text-[15px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>


        <div className="md:pl-[60px] pl-[20px] md:pr-[20px] pr-[5px] py-[20px] flex justify-between items-center  border-none ">
        <p className="text-[#616161] md:text-[16px] text-[12px]  font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] md:text-[24px] text-[15px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>


        <div className="md:pl-[60px] pl-[20px] md:pr-[20px] pr-[5px] py-[20px] flex justify-between items-center  border-none ">
        <p className="text-[#616161] md:text-[16px] text-[12px]  font-semibold">What is the purpose of email verifier?</p>
        <p className="w-[24px] h-[24px]  text-[#616161] md:text-[24px] text-[15px] font-semibold">+</p>
        </div>
        <hr className="border-0 h-[1px] bg-gray-300"/>



    

      </div>

      <div className="mx-[200px] relative flex items-center justify-center w-full ">
      <Image
        src="/bg2.png" 
        width={1080} 
        height={366} 
        alt="Background Image" 
        className="w-[1080px] h-[366px]" 
      />
    <div className="absolute flex flex-col items-center justify-center  top-16">
    <p className="font-bold md:text-[40px] text-[px]  text-white text-center px-4">Want to see BrandNav in action?</p>
    <p className="md:text-[20px] text-[18px] font-semibold text-[#F2F2F2] mb-[20px] mt-[20px]">Try BrandNav for free today!</p>
    <button className="bg-[#0084FF] text-white rounded-[5px] px-[20px] py-[10px] ">Grab free leads</button>
    <div className="flex gap-2   text-white items-center mt-[20px]">
        <Image src="/im.png" className="w-[16px] h-[12px]" width={16} height={16} alt=""/>
        <p className="text-[12px] md:text-[14px]">No credit card required | </p>
        <Image src="/5 star review.png" alt="" className="w-[65px] h-[13px]" width={65} height={13}/>
        <p className="text-[12px] md:text-[14px]">4.8/5 G2 Rating</p>
      </div>
    </div>
   
    </div>
      </div>
    )
}

export default Questions;