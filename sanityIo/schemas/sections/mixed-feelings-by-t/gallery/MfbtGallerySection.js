export default {
    name: 'MfbtGallerySection',
    title: "Mfbt Gallery Section",
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
            name: 'contentTexts',
            title: 'Content Text',
            type: 'array',
            of: [{type: 'text'}]
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{
                type: 'image', options: {
                    hotspot: true,
                }
            }]
        }
    ]
}



