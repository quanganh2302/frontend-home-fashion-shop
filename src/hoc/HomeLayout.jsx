import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Top-bar/TopBar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className=" overflow-hidden relative">
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
