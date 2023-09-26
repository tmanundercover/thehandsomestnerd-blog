
export default {
    name: 'WebDevHowItWorksSection',
    title: "Web Dev How it works Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentPreTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of:[{type: 'WebDevHowItWorksStep'}]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



