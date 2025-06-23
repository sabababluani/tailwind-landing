import Card from "./Card";

const Faq = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h3 className="text-[32px] font-[600]">Frequently Asked Questions</h3>
      <span className="text-[#9AA1A5]">
        You can sen email with your questions and we'll give your asnwer
      </span>
      <div className="flex gap-12">
        <Card
          title={"What is Zerqurity"}
          image={"/hand.png"}
          description={
            "Aytomatic white listing and protecting against malicious applications. Control what applications are run across your infrastructure by defining policies"
          }
          link={false}
        />
        <Card
          title={"Who is Zerqurity for"}
          image={"/slak.png"}
          description={
            "Aytomatic white listing and protecting against malicious applications. Control what applications are run across your infrastructure by defining policies"
          }
          link={false}
        />
        <Card
          title={"is my data secure?"}
          image={"/slack.png"}
          description={
            "Aytomatic white listing and protecting against malicious applications. Control what applications are run across your infrastructure by defining policies"
          }
          link={false}
        />
      </div>
      <button className="text-[#fff] rounded-[8px] px-[40px] py-[16px] cursor-pointer bg-gradient-to-r from-[#1127DCE8] to-[#0089FB]">
        SHOW MORE
      </button>
    </div>
  );
};

export default Faq;
