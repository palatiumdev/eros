"use client"
const Work = ({ children }) => {
    return (
        <div className="bg-accent w-full lg:w-full m-auto px-10 py-10 sm:py-20 gap-16 text-center grid place-items-center ">
            <h1 className="sm:text-6xl text-3xl">SOME MORE WORK</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 place-content-center gap-8">
                {children}
            </div>
        </div>
    )
}

export default Work 