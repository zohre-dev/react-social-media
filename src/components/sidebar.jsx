import Feed from "@mui/icons-material/RssFeed";
import Chats from "@mui/icons-material/Chat";
import Videos from "@mui/icons-material/PlayCircleFilledWhite";
import Groups from "@mui/icons-material/Groups";
import Bookmarks from "@mui/icons-material/Bookmarks";
import Questions from "@mui/icons-material/HelpOutline";
import Jobs from "@mui/icons-material/WorkOutline";
import Events from "@mui/icons-material/Event";
import Cources from "@mui/icons-material/School";

const Sidebar = () => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <div className="flex-[3] h-[calc(100vh-50px)] overflow-y-auto sticky top-[50px]">
      <div className="p-5">
        <ul>
          <li className="mb-5 flex items-center gap-4">
            <Feed />
            <span>Feed</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Chats />
            <span>Chats</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Videos />
            <span>Videos</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Groups />
            <span>Groups</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Bookmarks />
            <span>Bookmarks</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Questions />
            <span>Questions</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Jobs />
            <span>Jobs</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Events />
            <span>Events</span>
          </li>
          <li className="mb-5 flex items-center gap-4">
            <Cources />
            <span>Cources</span>
          </li>
        </ul>
        <button className="w-[150px] p-2.5 rounded-md font-semibold">
          Show More
        </button>
        <hr className="my-4" />
        <ul>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/01.jpg`}
            />
            <span>master</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/02.jpg`}
            />
            <span>honar.world</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/03.jpg`}
            />
            <span>happygril@9817</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/04.jpg`}
            />
            <span>mah.titibook</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/05.jpg`}
            />
            <span>englishFunny</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/06.jpg`}
            />
            <span>mj_heydari</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/07.jpg`}
            />
            <span>khateratdirooz</span>
          </li>
          <li className="flex items-center gap-2.5 mb-[15px]">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`${PF}images/persons/08.jpg`}
            />
            <span>master_programmer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
