export default {
    name: 'menuContainer',
    title: 'Menu Container',
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
            name: 'logoImageSrc',
            title: 'Logo image Src',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'logoImageAltText',
            title: 'Logo Image Alt Text',
            type: 'string',
        },
        {
            name: 'subMenus',
            title: 'Sub Menu',
            type: 'array',
            of: [{type: 'reference', to: {type: 'menuGroup'}}],
        }
    ]
}