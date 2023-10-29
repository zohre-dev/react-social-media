import Post from "./post";
import Share from "./share";
import useGetData from "../hooks/useGetData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Feed = ({ username }) => {
  const { user: currentUser } = useContext(AuthContext);

  // Local States
  const [allPostsToShow, setAllPostsToShow] = useState([]);
  const { data: allPosts } = useGetData("http://localhost:3000/posts");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let currenUser_posts = [];
    let userFreinds_posts = [];

    currenUser_posts =
      allPosts?.filter((post) => post.userId === currentUser.id) ?? [];

    if (allPosts) {
      console.log("first", currentUser);
      userFreinds_posts = currentUser.followings.flatMap((friendId) => {
        return allPosts.filter((post) => post.userId === friendId);
      });
    }

    if (currenUser_posts.length > 0 && userFreinds_posts.length > 0) {
      const combined = [...currenUser_posts, ...userFreinds_posts];
      setAllPostsToShow(
        combined.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    }
  }, [allPosts]);

  return (
    <div className="flex-[5.5]">
      <div className="p-5">
        {currentUser.username === username && (
          <Share postsLength={allPosts?.length || 0} />
        )}
        {allPostsToShow?.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
