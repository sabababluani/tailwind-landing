import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <Image src={"/guys.png"} alt={"guys"} width={354} height={400} />
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[#0A2340] text-[48px]">Common on join with us</h3>
        <p className="text-[14px] text-[#9AA1A5] text-center">
          The Most Trusted investment Vehicle
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <Image src={"/insta.png"} alt={"google"} width={135} height={35} />
        <Image src={"/intel.png"} alt={"apple"} width={88} height={88} />
        <Image src={"/amaz.png"} alt={"facebook"} width={135} height={35} />
        <Image src={"/face.png"} alt={"twitter"} width={135} height={35} />
        <Image src={"/beha.png"} alt={"linkedin"} width={135} height={35} />
      </div>
    </div>
  );
};

export default JoinUs;
