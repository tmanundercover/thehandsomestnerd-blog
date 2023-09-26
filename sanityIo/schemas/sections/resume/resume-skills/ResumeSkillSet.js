export default {
    name: 'ResumeSkillset',
    title: 'Resume Skillset',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Skillset',
            type: 'string',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "ResumeSkill"}]
            }]
        },
    ]
}