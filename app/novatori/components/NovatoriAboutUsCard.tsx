import Image from "next/image";

interface NovatoriAboutUsCardPropsInterface {
  title: string;
  description: string;
  image: string;
}

const NovatoriAboutUsCard = (props: NovatoriAboutUsCardPropsInterface) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-[#151c50]">{props.title}</h1>
        <p className="text-[#6E7291] leading-6">{props.description}</p>
      </div>
      <Image src={props.image} alt={props.title} width={580} height={360} />
    </div>
  );
};

export default NovatoriAboutUsCard;
