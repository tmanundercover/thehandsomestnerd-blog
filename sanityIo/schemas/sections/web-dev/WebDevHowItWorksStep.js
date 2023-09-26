export default {
    name: 'WebDevHowItWorksStep',
    title: 'Web Dev How It works Step',
    type: 'object',
    fields: [
        {
            name: 'isEnabled',
            title: 'Is Enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'contentText',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'learnMoreText',
            title: 'Learn More Text',
            type: 'string'
        },
        {
            name: 'learnMoreLink',
            title: 'Learn More Link',
            type: 'string'
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
            name: 'imageSrc',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



