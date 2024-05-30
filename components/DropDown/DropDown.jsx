"use client";
import React, { useEffect, useRef, useState } from "react";
import "./DropDown.css";

const DropDown = ({ icon, name, message, heading }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null); // Initialize useRef with null

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="icon" ref={menuRef}>
      {/* Assign menuRef using ref attribute */}

      {icon && React.cloneElement(icon, { onClick: () => setOpen(!open) })}
      {open && (
        <div className="dropdown-menu-component">
          <div className="heading">{heading}</div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
          <div className="profileImage-component">
            <div className="messageImage">
              <img
                src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p>{name}</p>
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
