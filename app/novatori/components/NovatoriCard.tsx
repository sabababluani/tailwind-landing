import Image from "next/image";

const NovatoriCard = (props: {
  image: string;
  title: string;

  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-[12px] px-[12px] py-[48px] rounded-[12px] bg-white max-w-[380px] w-full">
      <Image src={props.image} alt={props.title} width={52} height={52} />
      <h2 className="text-[#283D57] text-[17px] font-[700]">{props.title}</h2>
      <p className="text-[#3D4145] text-[14px]">{props.description}</p>
    </div>
  );
};

export default NovatoriCard;
