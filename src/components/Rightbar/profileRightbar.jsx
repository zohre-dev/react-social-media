import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useGetData from "../../hooks/useGetData";
import routesConfig from "../../configs/routes";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Add } from "@material-ui/icons";
import RemoveIcon from "@mui/icons-material/Remove";

const ProfileRightbar = ({ user }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  const { data } = useGetData("http://localhost:3000/users");
  const [freinds, SetFreinds] = useState([]);
  useEffect(() => {
    console.log("user.length", user?.length); //undefined
    if (data?.length > 0) {
      const res = user?.followings.flatMap((freindId) => {
        return data.filter((u) => u.id === freindId);
      });
      SetFreinds(res);
      console.log("res", res);
    }
  }, [data]);

  const handleFollow = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {currentUser.username !== user.username && (
        <button
          className="mt-[30px] mb-2.5 px-2.5  py-[5px] font-medium text-lg bg-green-400 text-white rounded-md flex items-center "
          onClick={handleFollow}
        >
          Follow
          <Add />
        </button>
      )}
      <h4 className="text-lg font-medium mb-2.5">User Information</h4>
      <div className="mb-8 ">
        <div className="mb-2.5">
          <span className="font-medium mr-[15px] text-[#555]">Country:</span>
          <span className="font-light">{user.country}</span>
        </div>
        <div className="mb-2.5">
          <span className="font-medium mr-[15px] text-[#555]">City:</span>
          <span className="font-light">{user.city}</span>
        </div>
        <div className="mb-2.5">
          <span className="font-medium mr-[15px] text-[#555]">
            Rlationship:
          </span>
          <span className="font-light">
            {user.relationship === 0 ? "Single" : "Maried"}
          </span>
        </div>
      </div>

      <h4 className="text-lg font-medium mb-2.5">User Freinds</h4>
      <div className="flex flex-wrap gap-5">
        {freinds?.map((f) => (
          <Link to={`${routesConfig.PROFILE}/${f.username}`} key={f.id}>
            {console.log("f", f.username)}
            <div className="flex flex-col cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src={
                  f.profilePicture
                    ? `${PF}${f.profilePicture}`
                    : `${PF}images/persons/noAvatar.png`
                }
              />
              <span className="self-center">{f.username}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProfileRightbar;
