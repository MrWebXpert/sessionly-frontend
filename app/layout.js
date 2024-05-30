import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sessionly",
    description: "Monitoring complete analytics",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>

                <ToastContainer />
                {children}
            </body>
        </html>
    );
}
