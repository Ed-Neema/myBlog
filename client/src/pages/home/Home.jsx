import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"
import Single from "../single/Single";
const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="home">
        {/* <Posts/>
        <Sidebar/> */}
        <Single/>
      </div>
    </>
  );
};

export default Home;
