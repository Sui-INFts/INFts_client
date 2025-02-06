// import StarIcon from "@/app/assets/icons/star.svg";
// import Image from "next/image";
import { PropsWithChildren } from "react";


export const HeroOrbit = ({ children, size } : PropsWithChildren <{size: number}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="inline-flex [animation-duration:30s]" style={{width: `${size}px`, height: `${size}px`}}>
          <div className=" inline-flex animate-spin [animation-duration:5s]">

            {children}
            {/* <Image
              src={StarIcon}
              alt="Star Icon"
              className="size-28 text-white"
            /> */}
          </div>
        </div>
      </div>
    )
}