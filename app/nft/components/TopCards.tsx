import Image from "next/image";

const TopCards = (props: { image: string; title: string; floor: string }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={props.image}
        alt="owl"
        width={292}
        height={303}
        className="rounded-t-2xl"
      />
      <div className="flex flex-col bg-[#eaeaea] rounded-b-2xl p-3">
        <p>{props.title}</p>
        <span>Floor: {props.floor} ETH</span>
      </div>
    </div>
  );
};

export default TopCards;
