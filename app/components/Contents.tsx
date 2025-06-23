import Image from "next/image";

const Content = () => {
  return (
    <div className="flex gap-12 justify-between">
      <div className="max-w-[519px] flex flex-col gap-6 justify-between">
        <h3 className="text-[32px] font-[600]">
          to peace of mind, knowing you can guarantee comliance
        </h3>
        <div className="flex flex-col gap-2">
          <p className="text-[#9AA1A5]">
            Get peace of mind, knowing you can guarantee compiance
          </p>
          <p className="text-[#9AA1A5]">
            Automatic whitelisting of application;
          </p>
          <p className="text-[#9AA1A5]">
            interragate assets using Osquery for; monitoring, commpliance,
            incident investigations etc;
          </p>
          <p className="text-[#9AA1A5]">Full REST API for integrations</p>
          <p className="text-[#344250] ">
            Get up and running{" "}
            <span className="text-[#08E1F0]">
              in 5 minutes. <br />
            </span>
            No commitment
          </p>
        </div>
      </div>
      <Image src={"/man.png"} alt="content" width={379} height={379} />
    </div>
  );
};

export default Content;
