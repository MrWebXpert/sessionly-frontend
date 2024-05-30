"use client";
import { useEffect, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useDropdown } from "@/context/DropDownContext";
import Link from "next/link";
import DropDown from "../DropDown/DropDown";
import { useRouter } from "next/navigation";
import "./header.css";

const Header = () => {
    const router = useRouter();
    const { open, setOpen, menuRef } = useDropdown();
    const [userId, setUserId] = useState(null);
    const [profileImg, setProfileImg] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        const storedProfile = localStorage.getItem("profile");
        setUserId(storedEmail);
        setProfileImg(storedProfile);
    }, []);

    const handleLogOut = () => {
        localStorage.clear();
        router.push('/');
    };

    return (
        <nav className="navbar">
            <div className="leftSide">
                <DropDown
                    icon={<FiMessageSquare className="iconStyling" />}
                    name="John Doe"
                    message="Hello, world!"
                    heading="Messages"
                />
                <DropDown
                    icon={<MdOutlineMailOutline className="iconStyling" />}
                    name="John Doe"
                    message="Hello, world!"
                    heading="E-mail"
                />
                <div className="about">
                    <Link href="">About</Link>
                </div>
            </div>
            <div className="rightSide">
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="image" ref={menuRef}>
                    {profileImg && (
                        <img
                            src={profileImg}
                            alt="profileImage"
                            onClick={() => setOpen(!open)}
                        />
                    )}
                    {open && (
                        <div className="dropdown-menu">
                            <div className="profileImage">
                                {profileImg && (
                                    <img
                                        src={profileImg}
                                        alt="profile image"
                                    />
                                )}
                                <div>
                                    <h6>Name</h6>
                                    <span>{userId}</span>
                                </div>
                            </div>
                            <Link href="/dashboard/profile" className="iconofProfile">
                                <span>
                                    <CgProfile />
                                </span>
                                <p>My Profile</p>
                            </Link>
                            <div id="button" className="iconofProfile ">
                                <button onClick={handleLogOut}>Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
