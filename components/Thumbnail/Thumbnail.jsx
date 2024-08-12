"use client"

import Image from "next/image"

const Thumbnail = ({ videoId }) => {
    return (
        <button className="relative aspect-video w-80 2xl:w-96" onClick={() => { window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank") }}>
            <Image
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                fill={true}
                alt="Thumbnail of video"
                className="rounded-3xl "
            />
        </button>
    )
}

export default Thumbnail