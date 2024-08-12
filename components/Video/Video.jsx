"use client"
//components
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

//css
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import "@/Styles/ytEmbed.css"

const Video = ({ videoId }) => {

    return (
        <div className='rounded-3xl overflow-clip w-80 sm:w-[40rem]'>
            <LiteYouTubeEmbed
                id={videoId}
                playerClass="ytButton"
                poster="maxresdefault"
                params='modestbranding=1'
            />
        </div>
    )
}

export default Video