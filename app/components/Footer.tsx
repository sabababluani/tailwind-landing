import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[url('/rec.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center gap-[40px] pt-30 pb-12">
      <h2 className="text-white text-[48px]">Stay updated!</h2>
      <div className="flex items-center gap-[16px] bg-white px-[16px] px-[8px] rounded-[8px] max-w-[681px] w-full">
        <Image src={"/mail.png"} alt={"logo"} width={40} height={40} />
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-transparent outline-none w-full placeholder:text-center"
        />
      </div>
      <button className="text-white px-[40px] py-[16px] bg-gradient-to-r from-[#00B9E4] to-[#00E6EF] rounded-[8px] cursor-pointer ">
        SHOW MORE
      </button>
    </div>
  );
};

export default Footer;
