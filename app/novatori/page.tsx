import NovatoriCard from "./components/NovatoriCard";
import NovatoriHeader from "./components/NovatoriHeader";
import NovatoriMainSection from "./components/NovatoriMainSection";

const Novatori = () => {
  return (
    <div className="w-full flex flex-col items-center justify-around bg-[#F7F8FA]">
      <div className="w-full">
        <NovatoriHeader />
      </div>
      <div className="w-full max-w-[1180px] flex flex-col items-center">
        <NovatoriMainSection />
        <div className="flex flex-wrap gap-[20px]">
          <NovatoriCard
            image={"/icon.png"}
            title={"ᲛᲔᲜᲢᲝᲠᲨᲘᲤᲘ"}
            description={
              "ჩვენი პროფესიონალი მენტორები სულ მზადყოფნაში არიან შენს დასახმარებლად"
            }
          />
          <NovatoriCard
            image={"/icon.png"}
            title={"ᲛᲔᲜᲢᲝᲠᲨᲘᲤᲘ"}
            description={
              "ჩვენი პროფესიონალი მენტორები სულ მზადყოფნაში არიან შენს დასახმარებლად"
            }
          />
          <NovatoriCard
            image={"/icon.png"}
            title={"ᲛᲔᲜᲢᲝᲠᲨᲘᲤᲘ"}
            description={
              "ჩვენი პროფესიონალი მენტორები სულ მზადყოფნაში არიან შენს დასახმარებლად"
            }
          />
          <NovatoriCard
            image={"/icon.png"}
            title={"ᲛᲔᲜᲢᲝᲠᲨᲘᲤᲘ"}
            description={
              "ჩვენი პროფესიონალი მენტორები სულ მზადყოფნაში არიან შენს დასახმარებლად"
            }
          />
          <NovatoriCard
            image={"/icon.png"}
            title={"ᲛᲔᲜᲢᲝᲠᲨᲘᲤᲘ"}
            description={
              "ჩვენი პროფესიონალი მენტორები სულ მზადყოფნაში არიან შენს დასახმარებლად"
            }
          />
          <NovatoriCard
            image={"/icon.png"}
            title={"ᲛᲔᲜᲢᲝᲠᲨᲘᲤᲘ"}
            description={
              "ჩვენი პროფესიონალი მენტორები სულ მზადყოფნაში არიან შენს დასახმარებლად"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Novatori;
