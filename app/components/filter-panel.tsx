import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Car, Filter } from "../types";

function FilterPanel({
  cars,
  setDisplayedCars,
}: {
  cars: Car[];
  setDisplayedCars: (cars: Car[]) => void;
}) {
  const [filter, setFilter] = useState<Filter>({});

  const filterBy = (field: keyof Filter, value: string) => {
    const newfilter: Filter = { ...filter, [field]: value };

    if (value === "Any" || !value) {
      delete newfilter[field];
    }

    setFilter(newfilter);
  };

  useEffect(() => {
    setDisplayedCars(
      cars.filter((car) => {
        const filterKeys = Object.keys(filter) as Array<keyof Filter>;

        return filterKeys.every((filterKey) => {
          if (filterKey === "priceTo") {
            return Number(car.price) < Number(filter[filterKey]);
          }

          if (filterKey === "priceFrom") {
            return Number(car.price) > Number(filter[filterKey]);
          }

          return car[filterKey] === filter[filterKey];
        });
      })
    );
  }, [filter]);

  return (
    <Card className="w-1/4 bg-slate-100 rounded-md p-4">
      <h4 className="mb-4">Filter:</h4>
      <Form.Label htmlFor="filterManufactuer">Manufactuer:</Form.Label>{" "}
      <Form.Select
        id="filterManufactuer"
        aria-label="Manufacturer"
        defaultValue={"Any"}
        onChange={(e) => filterBy("manufacturer", e.target.value)}
        className="mb-4"
        value={filter.manufacturer || "Any"}
      >
        <option value="Any">Any</option>

        {/* Dynamic list built from the incoming data */}
        {Array.from(new Set(cars.map((car) => car.manufacturer.trim()))).map(
          (manufacturer, index) => {
            return (
              <option value={manufacturer} key={index}>
                {manufacturer}
              </option>
            );
          }
        )}
      </Form.Select>
      <Form.Label htmlFor="filterBody">Body type:</Form.Label>
      <Form.Select
        id="filterBody"
        aria-label="Body type"
        defaultValue={"Any"}
        onChange={(e) => filterBy("body", e.target.value)}
        className="mb-4"
        value={filter.body || "Any"}
      >
        <option value="Any">Any</option>

        {Array.from(new Set(cars.map((car) => car.body.trim()))).map(
          (body, index) => {
            return (
              <option value={body} key={index}>
                {body}
              </option>
            );
          }
        )}
      </Form.Select>
      <h4 className="mb-4">Price range:</h4>
      <Form.Label htmlFor="inputFrom">From:</Form.Label>
      <Form.Control
        type="number"
        id="inputFrom"
        onChange={(e) => filterBy("priceFrom", e.target.value)}
        className="mb-2"
        value={filter.priceFrom || ""}
      />
      <Form.Label htmlFor="inputTo">To:</Form.Label>
      <Form.Control
        type="number"
        id="inputTo"
        onChange={(e) => filterBy("priceTo", e.target.value)}
        className="mb-4"
        value={filter.priceTo || ""}
      />
      <Button onClick={() => setFilter({})}>Reset filter</Button>
    </Card>
  );
}

export default FilterPanel;
