"use client";

import { AppBar, Toolbar } from "@mui/material";
import { Link } from "wouter";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <div className="container mx-auto">
          <Link href={"/"}>
            <p className="font-bold text-white text-2xl">
              Tech Community Day 2024
            </p>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
