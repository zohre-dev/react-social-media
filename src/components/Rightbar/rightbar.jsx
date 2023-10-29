import HomeRightbar from "./homeRightbar";
import ProfileRightbar from "./profileRightbar";

const Rightbar = ({ user }) => {
  return (
    <div className="flex-[3.5]">
      <div className="p-5">
        {user ? <ProfileRightbar user={user} /> : <HomeRightbar />}
      </div>
    </div>
  );
};
export default Rightbar;
