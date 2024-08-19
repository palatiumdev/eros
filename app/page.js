//components
import ContactCard from "@/components/Contactcard/ContactCard";
import Creator from "@/components/Creator/Creator";
import Footer from "@/components/Footer/Footer";
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
  const videos = await getVideos(home[0].workPlaylist)
  const stats = await getStats(home[0].statsUrl)

  const myPortableTextComponents = {
    // ...,
    marks: {
      textColor: ({ children, value }) => <span style={{ color: value.value }}>{children}</span>,
      highlightColor: ({ children, value }) => (
        <span style={{ background: value.value }}>{children}</span>
      ),
    },
  }


  return (
    <main className=" grid w-full place-items-center pt-5 gap-32">
      <div className="place-items-center place-content-center w-fit mt-16 grid gap-8">
        <h1 className="text-6xl w-full text-center ">EROSFX</h1>
        <div className="grid-cols-2 grid gap-8 w-[110rem]">
          <Hero heroText={<PortableText value={home[0].heroText} components={myPortableTextComponents} />} heroImage={home[0].heroImage} />
          <Video videoId={home[0].video1} />
          <Video videoId={home[0].video2} />
        </div>
      </div>

      <div className="relative overflow-clip grid gap-8 place-content-center">
        <p className="text-center text-4xl m-1">Creators worked with</p>
        <div className="absolute h-full w-full z-10 pointer-events-none bg-background" style={{ maskImage: 'linear-gradient(to right, black, transparent, transparent, transparent, black)', }} />
        <Slider>
          {home[0].creators.map((creator, i) => {
            return <Creator channelId={creator.userId} key={i} />
          })}
        </Slider>
      </div>

      <div className="text-center grid gap-8">
        <h1 className="text-6xl">DON'T TAKE MY WORD...</h1>
        <p className="text-5xl">Here's some feedback from clients:</p>
      </div>

      <div className="flex gap-8">
        {home[0].testimonials.map((creator, i) => {
          return <Testimonial userPic={creator.creator.asset.url} testimonialPic={creator.testimonial.asset.url} isRight={i % 2 == 0 ? false : true} key={i} />
        })}
      </div>

      <div className="w-[110rem]">
        <Stats stats={[{ title: "3+", text: "Years edited" }, { title: "50.000.000", text: "views generated" },]} />
      </div>

      <div className="w-[110rem]">
        <ContactCard contactTitle={home[0].contactTitle} contactText={<PortableText value={home[0].contactText} />} />
      </div>

      <div className="w-full">
        <Work>
          {videos.map((video, i) => {
            return <Thumbnail videoId={video} key={i} />
          })}
        </Work>
        <Footer footerHeading={home[0].footerHeading} footerCopyright={home[0].footerCopyright} />
      </div>
    </main >
  );
}
