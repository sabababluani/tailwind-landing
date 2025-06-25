const NftHeader = () => {
  return (
    <header className="flex justify-between items-center p-[24px] ">
      <span>NFTFORG</span>
      <nav className="flex gap-[24px] py-[8px] px-[16px] bg-[#EAEAEA] rounded-[8px]">
        <div className="flex items-center justify-center bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-[8px]">
          <span>Home</span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>NFT’s</span>
        </div>
        <div>
          <span>Top Creators</span>
        </div>
        <div>
          <span>FAQ</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
};

export default NftHeader;
