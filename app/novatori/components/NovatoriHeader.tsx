import Image from "next/image";

const NovatoriHeader = () => {
  return (
    <div className="flex justify-around items-center w-full py-5 bg-white">
      <Image src={"/novatori.png"} alt="novatori" width={90} height={48} />
      <nav className="flex items-center gap-6">
        <span className="text-[#151C50] font-[600]">მთავარი</span>
        <span className="text-[#151C50] font-[600]">ჩვენს შესახებ</span>
        <span className="text-[#151C50] font-[600]">კურსები</span>
        <span className="text-[#151C50] font-[600]">ბლოგი</span>
        <span className="text-[#151C50] font-[600]">კონტაქტი</span>
      </nav>
    </div>
  );
};

export default NovatoriHeader;
