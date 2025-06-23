const Header = () => {
  return (
    <header className="w-full flex justify-between items-center pt-[32px]">
      <h1 className="text-2xl font-bold text-white">Circle</h1>

      <div className="flex gap-12 items-center">
        <p className="text-white">About</p>
        <p className="text-white">Contact</p>
        <p className="text-white">DOCS</p>
      </div>

      <div className="flex gap-12 items-center">
        <p className="text-white">Login</p>
        <button className="text-[#0176DD] bg-white rounded-[8px] px-[16px] py-[8px] cursor-pointer border-white border-[1px]">
          Create Account
        </button>
      </div>
    </header>
  );
};

export default Header;
