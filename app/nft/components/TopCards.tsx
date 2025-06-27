import Image from "next/image";

const TopCards = () => {
  return (
    <div>
      <Image src={"/owl2.png"} alt="owl" width={292} height={303} />
      <div>
        <p>Dread spectre </p>
        <span>Floor: 0.08 ETH</span>
      </div>
    </div>
  );
};

export default TopCards;
