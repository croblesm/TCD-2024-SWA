"use client";

import { AppBar, Toolbar } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <div className="container mx-auto">
          <a href={"/"}>
            <p className="font-bold text-white text-2xl">Tech Community</p>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};
