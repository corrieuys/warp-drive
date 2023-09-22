"use client";

import React, { useState } from "react";
import { Car, Filter } from "../../types";
import { createHash } from "crypto";
import FilterPanel from "../filter-panel";
import CarSlide from "../car-slide";

function Browser({
  cars,
  cart,
  setCart,
  handleShowCart,
}: {
  cars: Car[];
  cart: Car[];
  setCart: (car: Car[]) => void;
  handleShowCart: () => void;
}) {
  const [displayedCars, setDisplayedCars] = useState(cars);

  const carHash = (car: Car) => {
    return createHash("sha256").update(JSON.stringify(car)).digest("hex");
  };

  return (
    <div className="flex flex-row w-full border-2 border-slate-400">
      <FilterPanel cars={cars} setDisplayedCars={setDisplayedCars} />
      <div className="w-3/4 px-4">
        {displayedCars.map((vehicle, index) => {
          const alreadyAdded = cart
            .map((car) => carHash(car))
            .includes(carHash(vehicle));
          return (
            <CarSlide
              key={index}
              car={vehicle}
              setCart={setCart}
              handleShowCart={handleShowCart}
              alreadyAdded={alreadyAdded}
              cart={cart}
            />
          );
        })}
        {cars.length === 0 && <h3>Loading...</h3>}
        {cars.length > 0 && displayedCars.length === 0 && (
          <p className="text-slate-400">No cars match your filter</p>
        )}
      </div>
    </div>
  );
}

export default Browser;
