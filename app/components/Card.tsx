import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  description: string;
}

const Card = (props: Props) => {
  return (
    <div className="max-w-[390px] w-full flex flex-col gap-8 bg-white rounded-[12px] p-6 items-center">
      <Image src={props.image} alt="headingphoto" width={135} height={135} />
      <div className="flex flex-col gap-6 items-center">
        <h3 className="font-bold text-2xl text-center">{props.title}</h3>
        <p className="text-center text-[#9AA1A5]">{props.description}</p>
      </div>
      <Link href={"#"} className="text-[#27A9FF]">
        Read more
      </Link>
    </div>
  );
};

export default Card;
