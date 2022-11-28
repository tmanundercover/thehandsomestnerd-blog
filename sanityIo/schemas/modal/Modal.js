export default {
    name: 'modal',
    title: 'Modal',
    type: 'document',
    fields: [
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'backgroundImageSrc',
            title: 'Background image Src',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'iconOverlayImageSrc',
            title: 'Icon overlay image Src',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'contentText',
            title: 'Content Text',
            type: "array",
            of: [
                {name: 'FAQ', title: 'Frequently Asked Question', type: 'faq'},
            ]
        },
        {
            name: 'notes',
            title: 'Notes',
            type: "array",
            of: [
                {name: 'Note', title: 'Note', type: 'string'},
            ]
        },
        {
            name: 'ctaButtonTitle',
            title: 'CTA Button Text',
            type: 'string'
        },
        {
            name: 'ctaButtonLink',
            title: 'CTA Button Link',
            type: 'string'
        }
    ],
}