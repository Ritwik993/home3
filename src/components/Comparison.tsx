import Image from "next/image";

const Comparison=()=>{
    return(
        <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image src="/demo.svg" className="object-cover md:block hidden" alt="" width={960} height={760} />
        <Image src="/demo2.svg" className="object-cover block md:hidden" alt="" width={328} height={1082} />
    </div>
        // <div className="w-[90vw] flex items-center justify-center text-center flex-col">
        //     <h1 className="text-[#2F327D] font-bold text-[36px] leading-[48px]">Now, a detailed comparison</h1>
        //     <p className="text-[16px] text-[#595B97] font-medium leading-[24px]">How does BrandNav stack up against Store Leads?</p>
        //     <div className="flex mt-[20px] w-[70vw]">
        //         <div className="flex-1 border-[1px] border-black flex items-center ">
        //         <p className="text-[20px] font-medium text-[#2F327D] text-left">Top Features</p>
        //         </div>
        //         <div className="flex-1 flex items-center border-[1px] border-black">
        //             <Image src="/logo100.svg" width={45} height={30} alt=""/>
        //             <p className="ml-[5px] text-[#2F327D] font-semibold text-[27px] ">BrandNav</p>
        //         </div>
        //         <div className="flex-1 flex items-center  text-left border-[1px] border-black">
        //             <Image src="/logo101.svg" width={45} height={30} alt=""/>
        //             <p className="ml-[5px] text-[#2F327D] font-semibold text-[27px] ">Store Leads</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Comparison;