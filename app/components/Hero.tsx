import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-46 items-center">
      <div className="flex flex-col gap-12 max-w-[498px]">
        <h2 className="text-4xl text-white font-bold">
          Real-time Monitoring <br /> Your infrastructure
        </h2>
        <span className="text-[#FFFFFF80]">
          Manage applications. interrogate assets using SQL. guarantee
          comliance.
        </span>
        <div className="flex gap-12 items-center">
          <button className="bg-[#FF5B00] text-white font-bold px-12 py-4 rounded-[8px] cursor-pointer">
            Get Started
          </button>
          <button className="bg-transparent border border-[#FFFFFF] text-white font-bold px-12 py-4 rounded-[8px] cursor-pointer">
            Contact us
          </button>
        </div>
      </div>
      <div>
        <Image src={"/hero.png"} alt="hero" width={519} height={379} />
      </div>
    </div>
  );
};

export default Hero;
