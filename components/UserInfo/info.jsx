import React from "react";
import "./info.css";
const Info = () => {
  return (
    <div>
      <div className="msg-sec">
        <div>
          <div>
            <h2>Welcome Steave</h2>
            <p className="msg-para">you have 3 new messages</p>
          </div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>

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
    </div>
  );
};

export default Info;
