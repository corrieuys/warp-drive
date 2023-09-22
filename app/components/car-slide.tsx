import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Car } from "../types";
import { formatCurrency } from "../utils/currency-formatter";

export default function CarSlide({
  car,
  setCart,
  handleShowCart,
  alreadyAdded,
  cart,
}: {
  car: Car;
  setCart: (car: Car[]) => void;
  handleShowCart: () => void;
  alreadyAdded: boolean;
  cart: Car[];
}) {
  return (
    <Card className="p-4 mb-4 hover:bg-slate-100 transition-all duration-100">
      <div className="flex fex-row justify-between drop-shadow-sm ">
        <div className="flex flex-row">
          <div className="w-[250px] h-[160px] relative flex flex-row">
            <Image
              // the base of this url can be extracted into an env variable
              src={`http://recruitment.warpdevelopment.co.za/vehicles${car.img}`}
              alt={`${car.manufacturer} ${car.model}`}
              fill={true}
              className="rounded-md "
              objectFit="cover"
              sizes="250px"
            />
          </div>
          <div className="flex flex-col px-4 justify-between">
            <Card.Title className="text-2xl font-bold">
              {car.manufacturer} {car.model}
            </Card.Title>
            <div className="flex flex-col">
              <span>Make: {car.manufacturer}</span>
              <span>Model: {car.model}</span>
              <span>Body: {car.body}</span>
            </div>
            <Card.Text>{formatCurrency(Number(car.price), "ZAR")}</Card.Text>
          </div>
        </div>
        <div className="flex flex-col justify-end w-[130px]">
          <Button
            disabled={alreadyAdded}
            variant={alreadyAdded ? "success" : "primary"}
            onClick={() => {
              setCart([...cart, car]);
              handleShowCart();
            }}
          >
            {alreadyAdded ? "Added" : "Add to cart"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
