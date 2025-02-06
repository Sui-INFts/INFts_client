// import Image from "next/image";
import { Header } from "./sections/header"
import { Hero  } from "./sections/hero";
import { Creators } from "./sections/Creators";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Creators />
    </div>
  );
}
