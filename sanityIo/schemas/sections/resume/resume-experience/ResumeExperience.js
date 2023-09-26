export default {
    name: 'ResumeExperience',
    title: 'Resume Experience',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Job Title',
            type: 'string',
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
            name: 'companySubtitle',
            title: 'Company Subtitle',
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
            name: 'description',
            title: 'Job Description or Requirements',
            type: 'text',
        },
        {
            name: 'skillsUsed',
            title: 'Skills Used in this position',
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "ResumeSkill"}]
            }]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}