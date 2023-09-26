export default {
    name: 'WebDevStatistic',
    title: 'Web Dev Statistic',
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
            name: 'statValue',
            title: 'Value',
            type: 'string',
        },
        {
            name: 'statContent',
            title: 'Content Title',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



