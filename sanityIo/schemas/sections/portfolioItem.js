import category from '../category'

export default {
    name: 'portfolioItem',
    title: 'Portfolio Item',
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
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of:[{type: 'category'}]
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string'
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'subtitle',
            title: 'SubTitle',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }
    ]
}