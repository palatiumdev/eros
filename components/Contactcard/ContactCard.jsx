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
        <div className="bg-accent w-fit lg:w-5/6 m-auto px-10 py-10 sm:py-20 gap-8 text-center rounded-3xl grid place-items-center">
            <h1 className="sm:text-5xl text-3xl">{contactTitle}</h1>
            <div className="font-mono sm:text-3xl text-2xl text-center grid gap-8 sm:gap-0">
                {contactText}
            </div>
            <Button text={"Work with me"} link={"https://x.com/erosfx_"} />
            <div className="flex gap-8">
                <Contact icon={<FaXTwitter size={35} />} action={() => { window.open("https://x.com/erosfx_", "_blank") }} />
                <Contact icon={<IoIosMail size={40} />} action={() => { navigator.clipboard.writeText("erosfxx@gmail.com") }} enableAnimation={true} />
            </div>
        </div>
    )
}

export default ContactCard