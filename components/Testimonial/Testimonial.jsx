import Image from "next/image"

const Testimonial = ({ userPic, testimonialPic }) => {
    return (
        <div className="relative grid place-items-center h-fit gap-8">
            <Image
                src={userPic}
                width={800}
                height={800}
                alt="Creator profile pic"
                className={"size-32 rounded-3xl"}
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