import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex gap-[50px] justify-center bg-[#EAEAEA] rounded-2xl p-8 w-full h-[600px]">
      <div className="flex flex-col items-stretch justify-between">
        <h2 className="text-[24px] font-bold">About Me</h2>
        <p className="text-[78px] font-bold">Pixel perfection pursuit</p>
      </div>
      <Image src={"/owl.png"} alt="aboutme" width={350} height={608} />
      <div className="flex flex-col justify-between items-start">
        <div className="flex flex-col gap-[24px] leading-8">
          <span className="text-[#8A9399]">FLOOR: 1.23 ETH</span>
          <p className="text-[#8A9399]">
            NFTS ARE UNIQUE DIGITAL ASSETS THAT ARE STORIED ON A BLOCKCHAIN,
            TYPICALLY USING SMART CONTRACTS. UNLIKE CRYPTOCURRENCIES SUCH AS
            BITCOIN OR ETHERIUM, NFTS ARE INDIVISIBLE AND CANNOT BE EXCHANGED ON
            E ONE-TWO-ONE BASICS.
          </p>
        </div>
        <button className="flex items-center justify-end px-[16px] py-[8px] bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-[8px] cursor-pointer ">
          Collects NFS's
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
