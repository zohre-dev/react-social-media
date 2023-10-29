import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfileImg from "/assets/images/persons/01.jpg";
import { Link } from "react-router-dom";
import routesConfig from "../configs/routes";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Topbar = () => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER; //public folder
  const { user } = useContext(AuthContext);
  return (
    <div
      id="topbarContainer"
      className="  h-[50px] flex justify-between w-full  items-center sticky top-0 z-[999] bg-green-300"
    >
      {/* left side */}
      <div className="flex-[3] logo pl-5 text-6 font-bold text-white cursor-pointer">
        <Link to={routesConfig.HOME}>Barmaye</Link>
      </div>

      {/* center side */}
      <div className="flex-[5]">
        <div className="searchbar w-full h-[30px] bg-white rounded-lg flex items-center">
          <SearchIcon className="text-xl ml-2.5 mr-1" />
          <input
            className="w-[70%] focus:outline-none"
            placeholder="Search ..."
            type="text"
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex-[4] flex items-center justify-around text-white">
        <div className="topbarLinks">
          <span className="topbarLink mr-2.5 text-sm cursor-pointer">
            HomePage
          </span>
          <span className="topbarLink mr-2.5 text-sm cursor-pointer">
            Timeline
          </span>
        </div>
        <div className="topbarIcons flex items-center justify-between gap-2.5">
          <div className="topbarIconItem cursor-pointer relative ">
            <PersonIcon />
            <span
              className="topbarIconBadge w-[15px] h-[15px] flex items-center justify-center
             absolute -right-[5px] -top-[5px] text-sm bg-red-500 rounded-full"
            >
              1
            </span>
          </div>
          <div className="topbarIconItem cursor-pointer relative">
            <ChatIcon />
            <span
              className="topbarIconBadge w-[15px] h-[15px] flex items-center justify-center
             absolute -right-[5px] -top-[5px] text-sm bg-red-500 rounded-full"
            >
              2
            </span>
          </div>
          <div className="topbarIconItem cursor-pointer relative">
            <NotificationsIcon />
            <span
              className="topbarIconBadge w-[15px] h-[15px] flex items-center justify-center
             absolute -right-[5px] -top-[5px] text-sm bg-red-500 rounded-full"
            >
              1
            </span>
          </div>
        </div>
        <Link to={`${routesConfig.PROFILE}/${user?.username}`}>
          <div className="topbarImg w-8 h-8 obeject-cover cursor-pointer">
            <img
              className="rounded-full"
              src={
                user?.profilePicture
                  ? `${PF}${user.profilePicture}`
                  : `${PF}images/persons/noAvatar.png`
              }
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Topbar;
