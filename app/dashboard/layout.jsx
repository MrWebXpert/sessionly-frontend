"use client";
import { SidebarProvider } from "@/context/SidebarContext";
import BaseLayout from "@/components/BaseLayout";
import DropDownContext from "@/context/DropDownContext";
import Header from "@/components/header/header";
import "../globals.css";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <SidebarProvider>
        <DropDownContext>
          <BaseLayout>
            <Header />
            {children}
          </BaseLayout>
        </DropDownContext>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
