import React from "react";
import "./awesome.css";
import Info from "../UserInfo/info";

const Awesome = () => {
  return (
    <div>
      <div className="cards">
        <div className="card-01">
          <h1> 27000 </h1>
          <p>Services </p>
        </div>
        <div className="card-02">
          <h1> 27000 </h1>
          <p>Services </p>
        </div>
        <div className="card-03">
          <h1> 27000 </h1>
          <p>Services </p>
        </div>
        <div className="card-04">
          <h1> 27000 </h1>
          <p>Services </p>
        </div>
      </div>

      <div className="section">
        <div className="msg-sec">
          <h2>Welcome Steave</h2>
          <p className="msg-para">you have 3 new messages</p>
          <div className="noti ">
            <div className="logo">
              <img
                src="https://monster-react-main.netlify.app/assets/user1-dfb4d5f9.jpg"
                alt="Logo"
                height={60}
                width={60}
              />
            </div>

            <div className="info">
              <p className="para-name ">James Anderson </p>
              <p className="">
                Lorem ipsum adipisicing elit. Impedit tenetur omnis...
              </p>
              <p>7:00PM </p>
            </div>
          </div>
          <div className="noti ">
            <div className="logo">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt="Logo"
                height={60}
                width={60}
              />
            </div>

            <div className="info">
              <p className="para-name">James Anderson </p>
              <p>Lorem ipsum adipisicing elit. Impedit tenetur omnis...</p>
              <p>7:00PM </p>
            </div>
          </div>
          <div className="noti ">
            <div className="logo">
              <img
                src="https://monster-react-main.netlify.app/assets/user3-ded97fcc.jpg"
                alt="Logo"
                height={60}
                width={60}
              />
            </div>

            <div className="info">
              <p className="para-name ">James Anderson </p>
              <p>Lorem ipsum adipisicing elit. Impedit tenetur omnis...</p>
              <p>7:00PM </p>
            </div>
          </div>
        </div>

        <div className="graph">
          <img src="./images/graph.png" alt="LOGO" />
        </div>
      </div>

      <div className="section-2">
        <Info />
      </div>
    </div>
  );
};

export default Awesome;
