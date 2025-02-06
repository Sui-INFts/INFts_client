"Use Client";

// import Image from "next/image";
// import ArrowDown from "@/app/assets/icons/arrow-down.svg";
// import grainImage from "@/app/assets/images/grain.jpg";
// import StarIcon from "@/app/assets/icons/star.svg";
// import { HeroOrbit } from "./HeroOrbit";


export function Hero() {
  return (
    <div className="py-40 lg:py-60 relative z-0 overflow-x-clip">
  
      <div className="hero-ring size-[620px] "></div>
      <div className="hero-ring size-[820px] "></div>
    
      {/* <div className="hero-ring size-[1220px] "></div> */}
{/* 
      <HeroOrbit size={620}>
      <Image
              src={StarIcon}
              alt="Star Icon"
              className="size-28 text-white"
            />
      </HeroOrbit> */}
    
     
      <div className="container mx-auto max-w-screen-xl px-8">
        <div className="flex flex-col items-center">
          <div className="bg-gray-950 border border-gray-800 rounded-full px-4 py-1 inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 size-2.5 rounded-full"></div>
            <div>Testnet</div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center mt-8">Inteligent NFTs</h1>
        <div className="flex flex-col items-center mt-8 gap-4">
      
          <button className="inline-flex items-center gap-2 bg-white border text-black  rounded-xl px-4 py-1">
            <span>🥳</span>
            <span>Connnet Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
