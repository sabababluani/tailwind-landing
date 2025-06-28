import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[url('/bg.png')] bg-no-repeat bg-center w-full relative">
        <Image
          src="/gigantowl.png"
          alt="logo"
          width={796}
          height={790}
          className="flex justify-self-center"
        />
        <div className="absolute top-[80px] right-0 max-w-[270px] w-full">
          <p className="text-[#8A9399] text-[20px]">
            NFTS ARE UNIQUE DIGITAL ASSETS THAT ARE STORIED ON A BLOCKCHAIN,
            TYPICALLY USING SMART AND EASY CONTRACTS.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
