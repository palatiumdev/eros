//fonts
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'

//css
import "@/Styles/globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: "500", variable: "--font-poppins" });
const tommy = localFont({ src: '../public/Tommy.woff2', variable: "--font-tommy" })

export const metadata = {
  title: 'ErosFx',
  openGraph: {
    title: 'ErosFx',
    description: "ErosFx Portfolio",
    url: 'https://erosfx.co/',
    siteName: 'ErosFx',
    images: [
      {
        url: 'https://i.postimg.cc/nhxkTdQx/banner.jpg',
        width: 800,
        height: 600,
      }
    ],
    twitter: {
      images: [
        {
          url: 'https://i.postimg.cc/nhxkTdQx/banner.jpg',
          width: 800,
          height: 600.
        },
      ]
    }
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tommy.variable} ${poppins.variable} font-sans bg-background text-white glow`}>{children}</body>
    </html>
  );
}
