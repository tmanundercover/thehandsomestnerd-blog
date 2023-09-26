export default {
    name: 'ResumeSkillSection',
    title: 'Resume Skills Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Section',
            type: 'string',
        },
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'text',
        },
        {
            name: 'skillsets',
            title: 'Skillsets',
            type: "array",
            of: [{type: "ResumeSkillset"},
            ]
        },
    ]
}