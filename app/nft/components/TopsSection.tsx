import TopCards from "./TopCards";

const TopsSection = () => {
  return (
    <div className="flex flex-col w-full gap-[24px]">
      <h2 className="text-[52px] font-bold">Top NFT's Collections 2024</h2>
      <div className="flex flex-row gap-[24px] flex-wrap">
        <TopCards image="/owl2.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/animal.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/npc.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/owl2.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/owl2.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/animal.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/npc.png" title="Dread spectre" floor="0.08" />
        <TopCards image="/owl2.png" title="Dread spectre" floor="0.08" />
      </div>
    </div>
  );
};

export default TopsSection;
