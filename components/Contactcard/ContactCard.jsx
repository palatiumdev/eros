"use client"
//Components
import Contact from "./Contact"

//icons
import { ImCheckmark } from "react-icons/im"
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Button from "../Button/Button";



const ContactCard = ({ contactTitle, contactText }) => {
    return (
        <div className="w-fit lg:w-full m-auto gap-16 text-center rounded-3xl grid place-items-center">
            <div className="grid gap-8">
                <h1 className="sm:text-6xl text-3xl">{contactTitle}</h1>
                <div className="font-mono sm:text-5xl text-2xl text-center grid gap-8 sm:gap-0">
                    {contactText}
                </div>
            </div>
            <Button text={"Work with me"} link={"https://x.com/erosfx_"} />
            <div className="flex gap-8">
                <Contact icon={<FaXTwitter size={65} />} action={() => { window.open("https://x.com/erosfx_", "_blank") }} />
                <Contact icon={<IoIosMail size={70} />} action={() => { navigator.clipboard.writeText("erosfxx@gmail.com") }} enableAnimation={true} />
            </div>
        </div>
    )
}

export default ContactCard