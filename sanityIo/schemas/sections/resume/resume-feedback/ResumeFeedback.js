export default {
    name: 'ResumeFeedback',
    title: 'Resume Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        },
        {
            name: 'customerTitle',
            title: 'Customer Title',
            type: 'string',
        },
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        },
        {
            name: 'quote',
            title: 'Customer Quote',
            type: 'text',
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