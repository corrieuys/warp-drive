"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import CartOffcanvas from "./cart";
import { Car } from "../types";

function NavBar({
  cart,
  setCart,
  show,
  handleCloseCart,
  handleShowCart,
}: {
  cart: Car[];
  setCart: (car: Car[]) => void;
  show: boolean;
  handleCloseCart: () => void;
  handleShowCart: () => void;
}) {
  return (
    <Navbar className="bg-slate-800 w-full">
      <Container>
        <Navbar.Brand className=" text-white flex flex-row items-center">
          <Image
            src="/warp-logo-white.svg"
            width="150"
            height="70"
            alt="React Bootstrap logo"
          />
          <h2 className="ml-8 text-slate-300"> Car browser</h2>
        </Navbar.Brand>
        <Container className="flex flex-row justify-end">
          <div
            className="text-white relative hover:bg-slate-600 p-2 rounded-full"
            onClick={handleShowCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div className="ml-2 rounded-full flex flex-row items-center justify-center bg-red-700 px-1.5 absolute -top-1 left-5">
              {cart.length}
            </div>
          </div>
          <CartOffcanvas
            show={show}
            handleClose={handleCloseCart}
            cart={cart}
            setCart={setCart}
          />
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavBar;
