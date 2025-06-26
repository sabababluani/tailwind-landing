const NftHeader = () => {
  return (
    <header className="flex justify-between items-center p-[24px] w-full ">
      <span>NFTFORG</span>
      <nav className="flex items-center gap-[24px] py-[8px] px-[16px] bg-[#EAEAEA] rounded-[8px]">
        <div className="flex items-center justify-center bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-[8px] px-[16px] py-[8px]">
          <span>Home</span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>NFT's</span>
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

      <div className="flex items-center gap-[16px]">
        <button className="flex items-center px-[16px] py-[8px] border-[1px] border-[#EAEAEA] rounded-[8px] text-[#9aa1a5] cursor-pointer">
          Wallet
        </button>
        <button className="flex items-center px-[16px] py-[8px] bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-[8px]">Collects NFS's</button>
      </div>
    </header>
  );
};

export default NftHeader;
