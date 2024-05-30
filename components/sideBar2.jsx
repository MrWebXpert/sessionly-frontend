"use client";
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
import { AuthService } from "@/services/AuthService";
import { useAuth } from "@/context/authContext";

const Sidebar = () => {
    const pathname = usePathname();
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
    const { user } = useAuth();
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const authService = new AuthService();
            const type = await authService.getUserType();
            setUserType(type);
        };

        fetchData();
    }, []);

    let sidebarItems = [];

    if (userType) {
        if (userType === "admin") {
            sidebarItems = [
                { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                { name: "Category", href: "/dashboard/category", icon: BsPeople },
                { name: "Admin", href: "/dashboard/admin", icon: FiMail },
                { name: "Experts Listing", href: "/dashboard/experts", icon: TiContacts },
                { name: "Student listing", href: "/dashboard/student", icon: TiContacts },
                { name: "Transactions", href: "/dashboard/transactions", icon: TiContacts },
                { name: "Course Listing", href: "/dashboard/list", icon: TiContacts },
                { name: "Connect", href: "/dashboard/connect", icon: TiContacts },
                { name: "Calendar", href: "/dashboard/calendar", icon: TiContacts },
            ];
        } else if (userType === "staff") {
            sidebarItems = [
                { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                { name: "Category", href: "/dashboard/category", icon: BsPeople },
                { name: "Staff", href: "/dashboard/staff", icon: FiMail },
                { name: "Experts Listing", href: "/dashboard/experts", icon: TiContacts },
                { name: "Student listing", href: "/dashboard/student", icon: TiContacts },
                { name: "Transactions", href: "/dashboard/transactions", icon: TiContacts },
                { name: "Course Listing", href: "/dashboard/list", icon: TiContacts },
                { name: "Connect", href: "/dashboard/connect", icon: TiContacts },
                { name: "Calendar", href: "/dashboard/calendar", icon: TiContacts },
            ];
        } else if (userType === "student") {
            sidebarItems = [
                { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                { name: "Category", href: "/dashboard/category", icon: BsPeople },
                { name: "Student", href: "/dashboard/student", icon: FiMail },
                { name: "Experts Listing", href: "/dashboard/experts", icon: TiContacts },
                { name: "Student listing", href: "/dashboard/student", icon: TiContacts },
                { name: "Transactions", href: "/dashboard/transactions", icon: TiContacts },
                { name: "Course Listing", href: "/dashboard/list", icon: TiContacts },
                { name: "Connect", href: "/dashboard/connect", icon: TiContacts },
                { name: "Calendar", href: "/dashboard/calendar", icon: TiContacts },
            ];
        }
    }
    
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
                    <p className="sidebar__logo-name">Seasonly Admin</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => {
                        return (
                            <li className="sidebar__item" key={name}>
                                <Link
                                    className={`sidebar__link ${
                                        pathname === href ? "sidebar__link--active" : ""
                                    }`}
                                    href={href}
                                >
                                    <span className="sidebar__icon">
                                        <Icon />
                                    </span>
                                    <span className="sidebar__name">{name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </div>
    );
};
export default Sidebar;
