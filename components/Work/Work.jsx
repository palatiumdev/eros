"use client"
const Work = ({ children }) => {
    return (
        <div className="bg-accent max-w-full text-center rounded-3xl grid place-items-center p-10 sm:p-20 gap-8">
            <h1 className="sm:text-5xl text-3xl">SOME MORE WORK</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center gap-16">
                {children}
            </div>
        </div>
    )
}

export default Work 