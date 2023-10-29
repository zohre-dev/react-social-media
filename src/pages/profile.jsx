import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Rightbar from "../components/Rightbar/rightbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  console.log("useParams", useParams);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios
        .get("http://localhost:3000/users")
        .then((response) => {
          return response.data.filter((item) => item.username === username);
        });
      if (res.length > 0) {
        setUser(res[0]);
      }
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profileContainer w-full flex">
        <Sidebar />
        <div className="profileRight flex-[9]">
          <div className="top">
            <div className="relative h-[320px]">
              <img
                className="profileCoverImg  w-full h-[250px] object-cover"
                src={
                  user?.coverPicture
                    ? `${PF}${user?.coverPicture}`
                    : `${PF}images/coverPictures/noCover.png`
                }
              />
              <img
                className="avatar w-[150px] h-[150px] rounded-full border-[3px] border-solid border-white absolute left-0 right-0 mx-auto top-[150px]"
                src={
                  user?.profilePicture
                    ? `${PF}${user?.profilePicture}`
                    : `${PF}images/persons/noAvatar.png`
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl font-bold">{user?.username}</h4>
              <span>are you here me !?</span>
            </div>
          </div>
          <div className="bottom flex">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
