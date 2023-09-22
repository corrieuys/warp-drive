"use client";

import React, { useState } from "react";
import NavBar from "../navbar";
import Browser from "./browser";
import { Car } from "@/app/types";

function AppBody({ carData }: { carData: Car[] }) {
  const [cart, setCart] = useState<Car[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleShowCart = () => {
    setShowCart(true);
  };
  return (
    <>
      <NavBar
        cart={cart}
        setCart={setCart}
        handleCloseCart={handleCloseCart}
        handleShowCart={handleShowCart}
        show={showCart}
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Browser
          cars={carData}
          cart={cart}
          setCart={setCart}
          handleShowCart={handleShowCart}
        />
      </main>
    </>
  );
}

export default AppBody;
