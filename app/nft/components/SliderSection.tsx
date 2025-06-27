import NftCard from "./NftCard";

const SliderSection = () => {
  return (
    <div className="flex w-full justify-between h-[275px]">
      <div className="flex items-center justify-center h-full w-[34px] bg-[#EAEAEA] rounded-l-[8px]">
        {"<"}
      </div>
      <div className="flex items-center h-full gap-[24px] w-full">
        <NftCard image={"/littleboy.png"} heading={"Dread spectre"} floor={"0.08"} />
        <NftCard image={"/tiger.png"} heading={"Helifier Marauder"} floor={"0.28"} />
        <NftCard image={"/space.png"} heading={"Nether Terror"} floor={"0.12"} />
        <NftCard image={"/person.png"} heading={"Sinister Phanatom"} floor={"0.53"} />
      </div>
      <div className="flex items-center justify-center h-full w-[34px] bg-[#EAEAEA] rounded-r-[8px]">
        {">"}
      </div>
    </div>
  );
};

export default SliderSection;
