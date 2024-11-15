import Image from "next/image";

const VideoTutorials2=()=>{
    return(
        <div className="flex flex-col items-center justify-center mt-[100px] w-[90vw] text-center">
            <h1 className="md:text-[36px] text-[30px] font-bold text-[#2F327D] md:leading-[48px] leading:[40px] md:w-[754px]">Easy-to-follow video tutorials to help you master BrandNav!</h1>
            <p className="font-medium text-[16px] text-[#595B97] mt-[20px]">We publish weekly tutorial videos to help users leverage the power of BrandNav</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-[20px]">
                <Image src="/vid 2.svg" alt="" className="object-cover" width={350} height={195}/>
                <Image src="/vid 2.svg" alt="" className="object-cover" width={350} height={195}/>
                <Image src="/vid 2.svg" alt="" className="object-cover" width={350} height={195}/>
                <Image src="/vid 2.svg" alt="" className="object-cover" width={350} height={195}/>
                <Image src="/vid 2.svg" alt="" className="object-cover" width={350} height={195}/>
                <Image src="/vid 2.svg" alt="" className="object-cover" width={350} height={195}/>
            </div>
        </div>
    )
}

export default VideoTutorials2;