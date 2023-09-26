export default {
    name: 'DevelopmentFooterSection',
    title: 'Dev Footer Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'footerMenuRef',
            title: 'Footer Menu',
            type: 'reference',
            to: [{type:'menuContainer'}]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



