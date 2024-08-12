import { createClient, groq } from "next-sanity";

export async function getHome() {
    const client = createClient({
        projectId: 'uusho6ar',
        dataset: 'production',
        apiVersion: "2024-08-10",

    })

    return client.fetch(
        groq`*[_type == "home"] {
            _id,
            _createdAt,
            headerText,
            heroText,  
            "heroImageUrl": heroImage.asset->url,
            video1,
            video2,
            creators,
            testimonials[]{
            username,
            "creator": creator{
            "asset": asset->{
                _id,
                url
            }
            },
            "testimonial": testimonial{
            "asset": asset->{
                _id,
                url
            }
            }
            },
            contactTitle,
            contactText,
            statsUrl,
            workTitle,
            workVideos,
            footerHeading,
            footerCopyright,
        }` , {}, { cache: "force-cache", next: { tags: ["home"], revalidate: 1 } }  //TO DO: Web hook solution
    )
}