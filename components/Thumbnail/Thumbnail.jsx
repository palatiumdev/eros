"use client";

import { useState } from "react";
import Image from "next/image";

const Thumbnail = ({ videoId }) => {
    const [imageSrc, setImageSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

    const handleError = () => {
        // Fall back to lower resolution thumbnail
        setImageSrc(`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
    };

    return (
        <button
            className="relative aspect-video w-64  xl:w-80"
            onClick={() => {
                window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
            }}
        >
            <Image
                src={imageSrc}
                fill={true}
                alt="Thumbnail of video"
                className="rounded-3xl"
                onError={handleError}  // Handle the error when the image cannot be loaded
            />
        </button>
    );
};

export default Thumbnail;