import { ImCheckmark } from "react-icons/im"

const Button = ({ text, link }) => {
    return (
        <button className="bg-primary rounded-3xl sm:text-3xl text-xl px-6 py-2 flex gap-3 place-items-center" onClick={() => { window.open(link, "_blank") }}>
            <p>{text}</p>
            <ImCheckmark />
        </button>
    )
}

export default Button
