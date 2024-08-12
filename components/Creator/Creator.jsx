import getCreator from "@/Data/getCreators"
import Image from "next/image"

const Creator = async ({ channelId }) => {
    const user = await getCreator(channelId)

    return (
        <div className="flex gap-4">
            {/*The image size depends on this div*/}
            <div className="relative size-12">
                <Image
                    src={user.profileImage}
                    fill={true}
                    alt="Profile picture of the creator"
                    className="absolute rounded-full"
                />
            </div>
            <div className="text-center">
                <h1 className="text-lg">{user.username}</h1>
                <p className="text-xs text-primary">{user.subCount} subscribers</p>
            </div>
        </div>
    )
}

export default Creator