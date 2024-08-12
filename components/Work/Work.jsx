"use client"
const Work = ({ children }) => {
    return (
        <div className="bg-accent w-fit lg:w-5/6 m-auto text-center rounded-3xl grid place-items-center px-10 py-10 sm:py-20 gap-8">
            <h1 className="sm:text-5xl text-3xl">SOME MORE WORK</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center gap-16">
                {children}
            </div>
        </div>
    )
}

export default Work 