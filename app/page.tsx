import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBody from "./components/layout/app";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const rawData = await fetch("http://localhost:3000/api/vehicles", {
    cache: "no-store",
  });

  const body = await rawData.json();

  return (
    <body className={inter.className}>
      <AppBody carData={body.data} />
    </body>
  );
}
