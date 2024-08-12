
"use client"

const Header = ({ headerText, logo }) => {
    return (
        <div className='grid grid-cols-3 m-auto place-items-center bg-primary gap-8 max-w-[37rem] rounded-full p-3'> {/* TO DO: add max-w */}
            <div>LOGO</div>
            <h1 className="text-2xl">{headerText}</h1>
            <button className="bg-white rounded-3xl text-xs text-accent px-4 py-2" onClick={() => { window.open("https://x.com/erosfx_", "_blank") }}>Work with me!</button>
        </div>
    )
}

export default Header