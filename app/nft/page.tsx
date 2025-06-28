import Image from "next/image";
import NftHeader from "./components/NftHeader";
import SliderSection from "./components/SliderSection";
import AboutMe from "./components/AboutMe";
import TopsSection from "./components/TopsSection";
import Footer from "./components/Footer";

const NFT = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-[1216px] w-full flex flex-col items-center justify-center gap-[34px]">
          <NftHeader />
          <div className="flex flex-col items-center justify-center relative">
            <h1 className=" absolute top-[40px] text-[106px] font-bold">
              NFT FUTURE IS HERE
            </h1>
            <Image
              src={"/boy.png"}
              alt="banner"
              width={1274}
              height={844}
              className="z-1"
            />
          </div>
          <SliderSection />
          <AboutMe />
          <TopsSection />
          <Footer />
        </div>
      </div>
      <div className="flex flex-col justify-center bg-black w-full relative bottom-0 right-0">
        <h3 className="text-[100px] font-bold text-white text-center">
          NFT WAVE ART TOKE
        </h3>

        <div className="flex justify-around ">
          <span className="text-white">CRAFTING DOGITAL COLLECTIBLES</span>
          <span className="text-white">CRYPTO CANVAS CREATIONS</span>
        </div>
      </div>
    </>
  );
};

export default NFT;
