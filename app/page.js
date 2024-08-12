//components
import ContactCard from "@/components/Contactcard/ContactCard";
import Creator from "@/components/Creator/Creator";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Stats from "@/components/Stats/Stats";
import Testimonial from "@/components/Testimonial/Testimonial";
import Thumbnail from "@/components/Thumbnail/Thumbnail";
import Video from "@/components/Video/Video";
import Work from "@/components/Work/Work";
import { PortableText } from '@portabletext/react'

//functions
import { getHome } from "@/sanity/sanity-utils";
import getVideos from "@/Data/getVideos";
import getStats from "@/Data/getStats";

export default async function Home() {
  const home = await getHome();
  //work
  const videos = await getVideos(home[0].workPlaylist) //TO DO change to home[0].workPlaylist
  const stats = await getStats(home[0].statsUrl)

  return (
    <main className=" grid w-full place-items-center pt-5 gap-16">
      <div className="w-full">
        <Header headerText={home[0].headerText} logo={""} /> {/* TO DO: add logo */}
      </div>
      <div className="w-full">
        <Hero heroText={<PortableText value={home[0].heroText} />} heroImage={home[0].heroImage} />
      </div>

      <div className="w-full place-items-center place-content-center lg:flex grid grid-cols-1 gap-8 sm:gap-16 px-5">
        <Video videoId={home[0].video1} />
        <Video videoId={home[0].video2} />
      </div>

      <div className="relative max-w-80 lg:max-w-[80rem] overflow-clip grid gap-8 place-content-center">
        <p className="text-center">Creators worked with</p>
        <div className="absolute h-full w-full bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <Slider>
          {home[0].creators.map((creator, i) => {
            return <Creator channelId={creator.userId} key={i} />
          })}
        </Slider>
      </div>

      <div className="grid gap-8">
        {home[0].testimonials.map((creator, i) => {
          return <Testimonial userPic={creator.creator.asset.url} testimonialPic={creator.testimonial.asset.url} isRight={i % 2 == 0 ? false : true} key={i} />
        })}
      </div>

      <div className="w-full sm:px-24 p-5">
        <ContactCard contactTitle={home[0].contactTitle} contactText={<PortableText value={home[0].contactText} />} />
      </div>

      <Stats />

      <div className="w-full sm:px-24 p-5">
        <Work>
          {videos.map((video, i) => {
            return <Thumbnail videoId={video} key={i} />
          })}
        </Work>
      </div>

      <Footer footerHeading={home[0].footerHeading} footerCopyright={home[0].footerCopyright} />

    </main >
  );
}
