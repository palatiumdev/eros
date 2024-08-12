const Footer = ({ footerHeading, footerCopyright }) => {
    return (
        <div className="w-full bg-primary text-center p-5 grid gap-2">
            <h1 className="text-4xl">{footerHeading}</h1>
            <p className="text-xs" >{footerCopyright}</p>
        </div>
    )
}

export default Footer