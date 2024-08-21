import getCreator from "@/Data/getCreators"
import Image from "next/image"

const Creator = async ({ channelId }) => {
    const user = await getCreator(channelId)

    return (
        <div className="flex gap-8 place-items-center size-fit">
            {/*The image size depends on this div*/}
            <div className="relative size-28">
                <Image
                    src={user.profileImage}
                    fill={true}
                    alt="Profile picture of the creator"
                    className="absolute rounded-full"
                />
            </div>
            <div className="text-center text-nowrap	">
                <h1 className="text-3xl">{user.username}</h1>
                <p className="text-2xl text-primary">{user.subCount} subs</p>
            </div>
        </div>
    )
}

export default Creator