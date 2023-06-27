import { Outlet } from "react-router-dom";
import Navegacion from "./Navegacion";
import { useState } from "react";

const Layout = () => {
  return (
    <div>
      <Navegacion isLogged={isLogged} setIsLogged={setIsLogged} />
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
