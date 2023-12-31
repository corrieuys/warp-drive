import { NextResponse } from "next/server";

const data = [
  {
    manufacturer: "Porsche",
    model: "911",
    price: 1550000,
    body: "Coupé",
    wiki: "http://en.wikipedia.org/wiki/Porsche_997",
    img: "/images/Porsche_997.jpg",
  },
  {
    manufacturer: "Nissan",
    model: "GT-R",
    price: 850000,
    body: "Coupé",
    wiki: "http://en.wikipedia.org/wiki/Nissan_Gt-r",
    img: "/images/Nissan_GT-R.jpg",
  },
  {
    manufacturer: "BMW",
    model: "M3",
    price: 705000,
    body: "Sedan",
    wiki: "http://en.wikipedia.org/wiki/Bmw_m3",
    img: "/images/BMW_M3.jpg",
  },
  {
    manufacturer: "Audi",
    model: "S5",
    price: 630000,
    body: "Sedan",
    wiki: "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5",
    img: "/images/Audi_S5.jpg",
  },
  {
    manufacturer: "Audi",
    model: "TT",
    price: 550000,
    body: "Coupé",
    wiki: "http://en.wikipedia.org/wiki/Audi_TT",
    img: "/images/Audi_TT.jpg",
  },
  {
    manufacturer: "Mercedes-Benz",
    model: "M-Class",
    price: 950000,
    body: "SUV",
    wiki: "https://en.wikipedia.org/wiki/Mercedes-Benz_M-Class",
    img: "/images/Mercedes-Benz_GLE.jpg",
  },
  {
    manufacturer: "Ford",
    model: "Mustang",
    price: 720000,
    body: "Coupé",
    wiki: "https://en.wikipedia.org/wiki/Ford_Mustang",
    img: "/images/Ford_Mustang_GT.jpg",
  },
];

export async function GET(request: Request, response: Response) {
  // Lets pretend we read from a database here...
  return new NextResponse(JSON.stringify(data));
}
