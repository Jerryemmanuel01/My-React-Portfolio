import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function SharedLayout(){
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
}
