import getCreator from "@/Data/getCreators"
import Image from "next/image"

const Creator = async ({ channelId }) => {
    const user = await getCreator(channelId)

    return (
        <div className="flex gap-4 place-items-center">
            {/*The image size depends on this div*/}
            <div className="relative size-24">
                <Image
                    src={user.profileImage}
                    fill={true}
                    alt="Profile picture of the creator"
                    className="absolute rounded-full"
                />
            </div>
            <div className="text-center">
                <h1 className="text-2xl">{user.username}</h1>
                <p className="text-xl text-primary">{user.subCount} subs</p>
            </div>
        </div>
    )
}

export default Creator