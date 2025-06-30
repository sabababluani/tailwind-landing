const NovatoriMainSection = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[780px] gap-12 py-[100px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-[#151C50] text-[40px] font-[900] text-center">
          სექტემბრის მიღებაზე{" "}
          <span className="text-[#ff6b00] underline uppercase">
            რეგისტრაიცია დაიწყო
          </span>
        </h1>
        <span className="text-[#6B7294] font-[500] leading-[26px] text-center">
          აირჩიე პროფესიული გადამზადების სრული კურსი, ისწავლე ახალი
          ტექნოლოგიები, გაიუმჯობესე სასაუბრო ინგლისური და იმოემზადე შენი პირველი
          გასაუბრებისთვის.
        </span>
      </div>
      <button className="bg-[#007BFC] px-[40px] py-[16px] rounded-[12px] text-white cursor-pointer">დარეგისტრირდი</button>
    </div>
  );
};

export default NovatoriMainSection;
