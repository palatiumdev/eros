"use client"
import Image from "next/image"
import Button from "../Button/Button";

const Hero = ({ heroText, heroImage }) => {
    return (
        <div className="relative min-h-[39rem] grid place-items-center m-auto">
            <div className="z-10 grid place-items-center gap-32">
                <div className="text-3xl sm:text-5xl text-center">
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
            <div className="absolute bg-gradient-to-b from-background via-background/50 via-10% to-background/50 h-full w-full"></div>
        </div>
    )
}

export default Hero