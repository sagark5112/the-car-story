import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
