import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Content from "./components/Contents";
import Faq from "./components/Faq";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex w-full justify-center bg-[url('/back.png')] bg-no-repeat">
      <div className="flex flex-col gap-48 max-w-[1216px] w-full justify-center ">
        <Header />
        <Hero />
        <div className="flex  gap-12 justify-center">
          <Card
            title={"Blcok applications"}
            image={"/one.png"}
            description={
              "Aytomatic white listing and protecting against malicious applications. Control what applications are run across your infrastructure by defining policies"
            }
            link={true}
          />
          <Card
            title={"Intero gate youre infrastructure"}
            image={"/two.png"}
            description={
              "Aytomatic white listing and protecting against malicious applications. Control what applications are run across your infrastructure by defining policies"
            }
            link={true}
          />
          <Card
            title={"Set alert"}
            image={"/one.png"}
            description={
              "Aytomatic white listing and protecting against malicious applications. Control what applications are run across your infrastructure by defining policies"
            }
            link={true}
          />
        </div>
        <Content />
        <Faq />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}
