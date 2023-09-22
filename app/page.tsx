"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBody from "./components/layout/app";
import { useEffect, useState } from "react";
import { Car } from "./types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [body, setBody] = useState<Car[]>([]);

  useEffect(() => {
    const getData = async () => {
      const rawData = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/vehicles`,
        {
          cache: "no-store",
        }
      );
      const data: Car[] = await rawData.json();
      setBody(data);
    };

    getData();
  }, []);

  return (
    <body className={inter.className}>
      <AppBody carData={body} />
    </body>
  );
}
