export default {
    name: 'ResumeEducation',
    title: 'Resume Education',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'institutionName',
            title: 'Instition Name',
            type: 'string',
        },
        {
            name: 'qualification',
            title: 'Qualification',
            type: 'string',
        },
        {
            name: 'dateStart',
            title: 'Start Date',
            type: 'date',
        },
        {
            name: 'dateEnd',
            title: 'End Date',
            type: 'date',
        },
        {
            name: 'locationCity',
            title: 'Location City',
            type: 'string',
        },
        {
            name: 'locationState',
            title: 'Location State',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Job Description or Requirements',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}