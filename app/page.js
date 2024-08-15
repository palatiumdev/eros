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
      <div className="place-items-center place-content-center grid-cols-2 grid gap-16 w-[110rem] mt-16">
        <Hero heroText={<PortableText value={home[0].heroText} components={myPortableTextComponents} />} heroImage={home[0].heroImage} />
        <Video videoId={home[0].video1} />
        <Video videoId={home[0].video2} />
      </div>

      <div className="relative max-w-80 lg:max-w-[90rem] overflow-clip grid gap-10 place-content-center">
        <p className="text-center text-4xl ">Creators worked with</p>
        <div className="absolute h-full w-full bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <Slider>
          {home[0].creators.map((creator, i) => {
            return <Creator channelId={creator.userId} key={i} />
          })}
        </Slider>
      </div>

      <div className="text-center grid gap-8">
        <h1 className="text-6xl">DON'T TAKE MY WORD</h1>
        <p className="text-5xl">Here's some feedback from clients</p>
      </div>

      <div className="flex gap-16">
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

      <Work>
        {videos.map((video, i) => {
          return <Thumbnail videoId={video} key={i} />
        })}
      </Work>

      <Footer footerHeading={home[0].footerHeading} footerCopyright={home[0].footerCopyright} />

    </main >
  );
}
