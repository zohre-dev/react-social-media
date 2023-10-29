import MoreVert from "@mui/icons-material/MoreVert";
import ThumbUp from "@mui/icons-material/ThumbUp";
import Favorite from "@mui/icons-material/Favorite";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import routesConfig from "../configs/routes";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER; //public folder
  const { user } = useContext(AuthContext);

  // // Read current-user from local storage
  // const currentUserId = JSON.parse(
  //   localStorage.getItem("current-userInfo")
  // ).current_userId; // shows 1  . user by id=1

  // Local States
  const [userBelongPost, setUserBelongPost] = useState([]);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    if (isLiked === false) {
      // make like:
      update_post_like();
    }
    if (isLiked === true) {
      // make disLike:
      update_post_disLike();
    }
  };

  const update_post_disLike = async () => {
    await axios
      .put(`http://localhost:3000/posts/${post.id}`, {
        id: post.id,
        desc: post.desc,
        img: post.img,
        userId: post.userId,
        likes: post.likes.filter((item) => item !== user?.id),
      })
      .then((response) => {
        setIsLiked(false);
        setLike(like - 1);
      })
      .catch((err) => console.error("Error is : ", err.response));
  };
  const update_post_like = async () => {
    await axios
      .put(`http://localhost:3000/posts/${post.id}`, {
        id: post.id,
        desc: post.desc,
        img: post.img,
        userId: post.userId,
        likes: [...post.likes, user?.id],
      })
      .then((response) => {
        console.log(response);
        setIsLiked(true);
        setLike(like + 1);
      })
      .catch((err) => console.error("Error is : ", err));
  };
  useEffect(() => {
    const getUserInfo = async () => {
      await axios
        .get(`http://localhost:3000/users/${post.userId}`)
        .then((response) => {
          setUserBelongPost(response.data);
        });
    };
    getUserInfo();
    setIsLiked(post.likes.includes(user?.id)); // current user liked before this post ?
  }, []);

  return (
    <div className="post w-full rounded-md shadow-[0_0_23px_-8px_rgba(0,0,0,0.24)] p-2.5 my-[30px]">
      <div className="postTop flex justify-between items-center">
        {/* left */}
        <div className="flex items-center gap-2.5 ">
          <Link
            to={
              user.id === post.userId
                ? `${routesConfig.PROFILE}/${userBelongPost?.username}`
                : null
            }
          >
            <img
              className="w-[50px] h-[50px] rounded-full object-cover"
              src={
                userBelongPost?.profilePicture
                  ? PF + userBelongPost.profilePicture
                  : PF + "images/persons/noAvatar.png"
              }
            />
          </Link>

          <span className="text-base font-medium">
            {userBelongPost?.username}
          </span>
          <span className="text-xs ">{post?.date}</span>
        </div>
        {/* right */}
        <div>
          <MoreVert />
        </div>
      </div>
      <div className="postCenter my-5">
        <span className="content">
          {/* while(alive){eat();sleep();code();repeat();} */}
          {post?.desc}
        </span>
        <img
          className="w-full mt-5 max-h-[500px] object-contain"
          src={PF + post.img}
        />
      </div>

      <div className="postBottom flex items-center justify-between">
        {/* left */}
        <div className=" flex items-center gap-[5px]">
          <ThumbUp
            onClick={likeHandler}
            className="w-6 h-6 cursor-pointer text-blue-600 "
          />
          <Favorite className="w-6 h-6 cursor-pointer" htmlColor="tomato" />
          <span className="text-[15px]">{like} people liked it</span>
        </div>

        {/* right */}
        <div>
          <span className="border-b-1 border-dashed border-gray-400 cursor-pointer">
            {post.comment} commnets
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
