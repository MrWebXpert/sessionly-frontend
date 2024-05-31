import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/context/SidebarContext";
import { AuthContext, useAuth } from "@/context/authContext";
import { IoCreate } from "react-icons/io5";
import { FaCalendarAlt, FaTasks, FaVideo } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaNetworkWired } from "react-icons/fa";

const Sidebar = () => {
    const pathname = usePathname();
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
    const { userType, login } = useContext(AuthContext);
    const [sidebarItems, setSidebarItems] = useState([]);


    useEffect(() => {
        console.log("User Type:", userType);
        if (userType) {
            let items = [];
            if (userType === "admin") {
                items = [
                    { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                    { name: "transection", href: "/dashboard/experts", icon: TiContacts },
                    // { name: "Courses", href: "/dashboard/course", icon: IoCreate },
                    // { name: "Task", href: "/dashboard/task", icon: FaTasks },
                    { name: "BookedSessions", href: "/dashboard/courseBooking", icon: FaBook },
                    { name: "Profile", href: "/dashboard/admin/profile", icon: CgProfile },

                    // Add other admin sidebar items here
                ];
            } else if (userType === "experts") {
                items = [
                    { name: "transection", href: "/dashboard/experts", icon: FiMail },
                    { name: "Session", href: "/dashboard/session", icon: TiContacts },
                    { name: "Profile", href: "/dashboard/experts/profile", icon: CgProfile },
                    { name: "Schedules", href: "/dashboard/experts/schedules", icon: FaNetworkWired },
                    { name: "CreateRoom", href: "/dashboard/room", icon: FaVideo },
                    {
                        name: "Session Appoinment", href: "/dashboard/sessionAppointment", icon: FaCalendarAlt,
                    },

                    // Add other staff sidebar items here
                ];
            } else if (userType === "student") {
                items = [
                    { name: "Home", href: "/", icon: TiContacts },
                    // { name: "Session", href: "/dashboard/student/courses", icon: FaBookOpenReader },
                    { name: "Bookings", href: "/dashboard/student/bookings", icon: CiBookmarkCheck },
                    { name: "Profile", href: "/dashboard/student/profile", icon: CgProfile },
                    // Add other student sidebar items here
                ];
            }
            console.log("Sidebar Items:", items);
            setSidebarItems(items);
        }
    }, [userType]);

    return (
        <div className="sidebar__wrapper">
            <button className="btn" onClick={toggleSidebarcollapse}>
                {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapse={isCollapsed}>
                <div className="sidebar__top">
                    <Image
                        width={80}
                        height={80}
                        className="sidebar__logo"
                        src="/logo.png"
                        alt="logo"
                    />
                    <p className="sidebar__logo-name">Seasonly</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className="sidebar__item" key={name}>
                            <Link
                                className={`sidebar__link ${pathname === href ? "sidebar__link--active" : ""
                                    }`}
                                href={href}
                            >
                                <span className="sidebar__icon">
                                    <Icon />
                                </span>
                                <span className="sidebar__name">{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
