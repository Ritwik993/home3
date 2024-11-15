import Image from "next/image"

const Middle=()=>{
    return(
        
      <div className="flex flex-col md:text-center text-left items-center justify-center md:mt-[200px] mt-[100px] mb-[100px] md:px-0 px-[10px] md:w-auto w-[80vw]">
      <p className="text-[#2F327D] font-bold text-[36px]">Who is using BrandNav?</p>
      <p className="text-[16px] text-[#595B97] mt-[15px] mb-[20px]">BrandNav has become irreplaceable tool for businesses</p>
      
      <div className="grid md:grid-cols-3 gri-cols-1 gap-x-8 gap-y-[100px] md:px-[100px]">
      <div className="text-center flex flex-col md:items-center justify-center">
        <Image src="/15.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px] md:text-center text-left">Sales & Marketing Teams</p>
        <p className="text-[16px] text-[#595B97] md:text-center text-left">Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.</p>
      </div>
      <div className="text-center flex flex-col md:items-center justify-center">
        <Image src="/161.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px] md:text-center text-left">Software & IT Companies</p>
        <p className="text-[16px] text-[#595B97] md:text-center text-left">IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.</p>
      </div>
      <div className="text-center flex flex-col md:items-center justify-center">
        <Image src="/171.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px] md:text-center text-left">Service Providers</p>
        <p className="text-[16px] text-[#595B97] md:text-center text-left">Service providers are using BrandNav  to locate accurate email addresses  build a list of contacts, and improve the efficiency of their sales process.</p>
      </div>
      <div className="text-center flex flex-col md:items-center justify-center">
        <Image src="/18.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px] md:text-center text-left">Recruiters</p>
        <p className="text-[16px] text-[#595B97] md:text-center text-left">Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.</p>
      </div>
      <div className="text-center flex flex-col md:items-center justify-center">
        <Image src="/19.png" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px] md:text-center text-left">Backlinks Outreach</p>
        <p className="text-[16px] text-[#595B97] md:text-center text-left">SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes</p>
      </div>
      <div className="text-center flex flex-col md:items-center justify-center">
        <Image src="/20.svg" width={71} height={66} alt=""/>
        <p className="text-[#2F327D] font-semibold text-[20px] mt-[20px] md:text-center text-left">Investors</p>
        <p className="text-[16px] text-[#595B97] md:text-center text-left">Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.</p>
      </div>
      
      
      </div>
      <button className="text-white text-medium text-[16px] bg-[#0084FF] p-[10px] md:w-[175px] rounded-[5px] md:ml-[8px] shadow-xl mt-[30px] w-[90vw]">Grab free leads</button>
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

export default Middle;