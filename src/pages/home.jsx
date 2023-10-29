import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Rightbar from "../components/Rightbar/rightbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer w-full flex">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
