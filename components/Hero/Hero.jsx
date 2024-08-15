"use client"
import Image from "next/image"
import Button from "../Button/Button";

const Hero = ({ heroText, heroImage }) => {
    return (
        <div className="relative col-span-2 min-h-[40rem] grid place-items-center m-auto w-full rounded-3xl overflow-clip">
            <div className="z-10 grid place-items-center gap-16">
                <div className="text-3xl sm:text-6xl text-center">
                    {heroText}
                </div>
                <Button text={"Work with me"} link={"https://x.com/erosfx_"} />
            </div>
            <Image
                src={heroImage}
                fill={true}
                alt="Hero video"
                className="object-cover -z-10 absolute"
            />
            <div className="absolute bg-background/50 size-full"></div>
        </div>
    )
}

export default Hero