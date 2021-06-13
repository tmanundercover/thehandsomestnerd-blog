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
            name: 'subMenus',
            title: 'Sub Menu',
            type: 'array',
            of: [{type: 'reference', to: {type: 'menuGroup'}}],
        }
    ]
}