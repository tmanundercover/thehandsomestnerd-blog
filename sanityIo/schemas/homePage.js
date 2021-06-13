export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'clientName',
            title: 'Your Full Name',
            type: 'string'
        },
        {
            name: 'occupation',
            title: 'Your Occupation',
            type: 'string'
        },
        {
            name: 'heroImage',
            title: 'A Picture of you',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'aboutMeBody',
            title: 'About Me Body',
            type: 'blockContent',
        },
        {
            name: 'profileImage',
            title: 'About Me Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'skillsHeading',
            title: 'Skills Heading',
            type: 'string'
        },
        {
            name: 'skillsText',
            title: 'Skills Text',
            type: 'blockContent',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'skill'}],
        },
        {
            name: 'specialties',
            title: 'Specialties',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'portfolioItems',
            title: 'Portfolio Items',
            type: 'array',
            of: [{type: 'reference', to: {type: 'portfolioItem'}}],
        },
        {
            name: 'freelancePrompt',
            title: 'Freelance Prompt text',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'facebook',
            title: 'Facebook Handle',
            type: 'string'
        },
        {
            name: 'twitter',
            title: 'Twitter Handle',
            type: 'string'
        },
        {
            name: 'linkedIn',
            title: 'LinkedIn Handle',
            type: 'string'
        },
        {
            name: 'youtube',
            title: 'Youtube Handle',
            type: 'string'
        },
        {
            name: 'pageContent',
            title: 'Page Content',
            type: 'contentContainer'
        }
    ]
}