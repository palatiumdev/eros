import { ImCheckmark } from "react-icons/im"

const Button = ({ text, link }) => {
    return (
        <button className="bg-white text-black rounded-3xl sm:text-5xl text-xl px-8 py-4 flex gap-5 place-items-center hover:scale-110 transition-transform" onClick={() => { window.open(link, "_blank") }}>
            <p>{text}</p>
            <ImCheckmark size={40} />
        </button>
    )
}

export default Button
