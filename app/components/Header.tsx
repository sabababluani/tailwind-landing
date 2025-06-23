const Header = () => {
  return (
    <header className="w-full flex justify-between items-center pt-[32px]">
      <h1 className="text-2xl font-bold">Circle</h1>

      <div className="flex gap-12 items-center">
        <p>About</p>
        <p>Contact</p>
        <p>DOCS</p>
      </div>

      <div className="flex gap-12 items-center">
        <p>Login</p>
        <button>Create Account</button>
      </div>
    </header>
  );
};

export default Header;
