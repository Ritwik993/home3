import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Banner3 from "@/components/Banner3";
import BenefitSection from "@/components/BenefitSection";
import Comparison from "@/components/Comparison";
import HeroSection from "@/components/HeroSection";
import Middle from "@/components/Middle";
import PinPoint from "@/components/PinPoint";
import Questions from "@/components/Questions";
import Review from "@/components/Review";
import VideoTestimonials from "@/components/VideoTestimonials";
import VideoTutorials from "@/components/VideoTutorials";
import VideoTutorials2 from "@/components/VideoTutorials2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[130px] flex flex-col items-center justify-center ">
      <HeroSection/>
      <Image src="/im1.png" alt="" width={900} height={400} className="objext-cover"/>
      <Image src="/im4.svg" alt="" width={860} height={112} className="object-cover hidden md:block "/>
      <Image src="/im5.svg" width={360} height={260} alt="" className="object-cover md:hidden block " />
      <BenefitSection/>
      <Review/>
      <Banner/>
      <Middle/>
      <VideoTestimonials/>
      <Banner2/>
      <Comparison/>
      <Banner3/>
      <PinPoint/>
      <VideoTutorials2/>
      <Questions/>
    </div>
  );
}
