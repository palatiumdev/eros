const Footer = ({ footerHeading, footerCopyright }) => {
    return (
        <div className="relative w-full bg-primary text-center p-5 grid gap-2">
            <div className="absolute top-0 w-full h-8 rounded-b-full bg-accent"></div>
            <h1 className="text-4xl mt-8">{footerHeading}</h1>
            <p className="text-xs" >{footerCopyright}</p>
        </div>
    )
}

export default Footer