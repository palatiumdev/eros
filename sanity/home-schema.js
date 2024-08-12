const home = {
    name: "home",
    title: "Home",
    type: "document",
    fields: [
        {
            name: "headerText",
            title: "Header text",
            type: "string"
        },
        {
            name: 'heroText',
            title: 'Hero text',
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "heroImage",
            title: "Hero image",
            type: "image"
        },
        {
            name: "video1",
            title: "Video 1",
            type: "string"
        },
        {
            name: "video2",
            title: "Video 2",
            type: "string"
        },
        {
            name: 'creators',
            title: 'Creators',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'username',
                            type: 'string',
                            title: 'Username',
                        },
                        {
                            name: 'userId',
                            type: 'string',
                            title: 'User id',
                        },

                    ]
                }
            ]
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'username',
                            type: 'string',
                            title: 'Username',
                        },
                        {
                            name: 'creator',
                            type: 'image',
                            title: 'Creator',
                        },
                        {
                            name: 'testimonial',
                            type: 'image',
                            title: 'Testimonial',
                        },

                    ]
                }]
        },
        {
            name: 'contactTitle',
            title: 'Contact title',
            type: "string"
        },
        {
            name: 'contactText',
            title: 'Contact text',
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: 'statsUrl',
            title: 'Stats url',
            type: "string",

        },
        {
            name: 'workTitle',
            title: 'Work title',
            type: "string"
        },
        {
            name: 'workPlaylist',
            title: 'Work playlist',
            type: "string"
        },
        {
            name: 'footerHeading',
            title: 'Footer heading',
            type: "string"
        },
        {
            name: 'footerCopyright',
            title: 'Footer copyright',
            type: "string"
        },
    ]
}

export default home;
