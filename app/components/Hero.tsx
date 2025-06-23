import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-46 items-center">
      <div className="flex flex-col gap-12 max-w-[498px]">
        <h2 className="text-4xl">
          Real-time Monitoring <br /> Your infrastructure
        </h2>
        <span>
          Manage applications. interrogate assets using SQL. guarantee
          comliance.
        </span>
        <div className="flex gap-12 items-center">
          <button className="bg-black text-white px-12 py-4 rounded-full cursor-pointer">
            Get Started
          </button>
          <button className="bg-white text-black px-12 py-4 rounded-full cursor-pointer">
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
