import Image from "next/image";
import NftHeader from "./components/NftHeader";
import SliderSection from "./components/SliderSection";
import AboutMe from "./components/AboutMe";
import TopsSection from "./components/TopsSection";

const NFT = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-[1216px] w-full flex flex-col items-center justify-center gap-[34px]">
        <NftHeader />
        <div className="flex flex-col items-center justify-center relative">
          <h1 className=" absolute top-[40px] text-[106px] font-bold">NFT FUTURE IS HERE</h1>
          <Image src={"/boy.png"} alt="banner" width={1274} height={844} className="z-1" />
        </div>
        <SliderSection />
        <AboutMe />
        <TopsSection />
      </div>
    </div>
  );
};

export default NFT;
