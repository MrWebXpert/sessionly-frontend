import { AuthProvider } from "@/context/authContext";
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <AuthProvider>
      <Sidebar />
      <main className="layout__main-content">{children}</main>
      </AuthProvider>
    </div>
  );
};

export default BaseLayout;
