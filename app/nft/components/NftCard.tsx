const NftCard = (props: { image: string; heading: string; floor: string }) => {
  return (
    <div 
      className="flex-1 rounded-[8px] bg-cover bg-center h-full flex flex-col justify-end p-[16px]"
      style={{ backgroundImage: `url('${props.image}')` }}
    >
      <p className="text-white font-bold">{props.heading}</p>
      <span className="text-[#EAEAEA]">Floor: {props.floor} ETH</span>
    </div>
  );
};

export default NftCard;