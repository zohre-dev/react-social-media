import PermMedia from "@mui/icons-material/PermMedia";
import Label from "@mui/icons-material/Label";
import Location from "@mui/icons-material/LocationOn";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import { useEffect, useState, useRef, useContext } from "react";
import useGetData from "../hooks/useGetData";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Share = ({ postsLength }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER; //public folder
  const { user } = useContext(AuthContext);

  // Local States
  const [file, setFile] = useState(null);

  const description = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      id: postsLength + 1,
      desc: description.current.value,
      likes: [],
      userId: user.id,
      createdAt: Date.now(),
    };
    if (file) {
      const fileName = Date.now() + file.name;
      newPost.img = "images/posts/0" + (postsLength + 1) + ".jpg";
      console.log(newPost.img);
      try {
      } catch (err) {
        console.log("errorrrrr:", err);
      }
    }
    try {
      await axios
        .post("http://localhost:3000/posts", newPost)
        .then(() => window.location.reload());
    } catch (err) {}
  };

  return (
    // "/assets/images/persons/01.jpg"
    <div className="w-full h-[170px] rounded-md shadow-[0_0_23px_-8px_rgba(0,0,0,0.24)] p-2.5">
      <div className="shareTop flex items-center gap-5">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={
            user?.profilePicture
              ? PF + user.profilePicture
              : PF + "images/persons/noAvatar.png"
          }
        />
        <input
          className="w-[80%] border-none focus:outline-none"
          placeholder={`what's in you'r mind ${user?.username}?`}
          ref={description}
        />
      </div>
      <hr className="shareHr m-4" />
      <form
        className="shareBottom flex justify-between items-center px-4"
        onSubmit={submitHandler}
      >
        <div className="shareOptions flex justify-between gap-[15px]">
          <label
            htmlFor="file"
            className="shareOption flex items-center gap-1 cursor-pointer "
          >
            <PermMedia htmlColor="tomato" />
            <span className="text-sm font-medium">Photo Or Video</span>
            <input
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </label>
          <div className="shareOption flex items-center gap-1 cursor-pointer">
            <Label htmlColor="blue" />
            <span className="text-sm font-medium">Tag</span>
          </div>
          <div className="shareOption flex items-center gap-1 cursor-pointer">
            <Location htmlColor="green" />
            <span className="text-sm font-medium">Location</span>
          </div>
          <div className="shareOption flex items-center gap-1 cursor-pointer">
            <EmojiEmotions htmlColor="goldenrod" />
            <span className="text-sm font-medium">Feeling</span>
          </div>
        </div>
        <button className="py-1 px-2 text-white font-semibold rounded-md bg-green-500">
          Share
        </button>
      </form>
    </div>
  );
};
export default Share;
