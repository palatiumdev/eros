import Image from "next/image"

const Testimonial = ({ userPic, testimonialPic, isRight = false }) => {
    let position = "size-24 rounded-3xl lg:absolute lg:order-2 -left-40";
    if (isRight) { position = "-right-40 size-24 rounded-3xl lg:absolute lg:order-2" }
    return (
        <div className="relative grid place-items-center lg:flex items-center gap-8 m-5">
            <Image
                src={userPic}
                width={500}
                height={500}
                alt="Creator profile pic"
                className={position}
            />

            <Image
                src={testimonialPic}
                width={500}
                height={0}
                alt="Creator profile pic"
                className="rounded-3xl"
            />
        </div>
    )
}

export default Testimonial