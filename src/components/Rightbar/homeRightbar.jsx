const HomeRightbar = () => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <>
      <div className="birthdayContainer flex items-center gap-2.5">
        <img className="w-10 h-10" src="/assets/images/gift.png" />
        <span className="font-light text-[15px]">
          today is <b>zohre's</b> and <b>3 other freinds</b> birthday
        </span>
      </div>
      <img
        className="advertisment my-[30px] w-full rounded-md"
        src={`${PF}images/ad.jpg`}
      />
      <h4 className="mb-5">Online Freinds</h4>
      <ul>
        <li className="flex items-center gap-2.5 mb-[15px]">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src={`${PF}images/persons/08.jpg`}
            />
            <span className="w-3 h-3 rounded-full bg-green-600 border-2 border-solid border-white absolute right-0 -top-[2px]"></span>
          </div>
          <span className="font-medium cursor-pointer">master_programmer</span>
        </li>
        <li className="flex items-center gap-2.5 mb-[15px]">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src={`${PF}images/persons/03.jpg`}
            />
            <span className="w-3 h-3 rounded-full bg-green-600 border-2 border-solid border-white absolute right-0 -top-[2px]"></span>
          </div>
          <span className="font-medium cursor-pointer">mah.titibook</span>
        </li>
      </ul>
    </>
  );
};
export default HomeRightbar;
