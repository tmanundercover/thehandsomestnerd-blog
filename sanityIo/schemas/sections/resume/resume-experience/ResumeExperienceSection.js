export default {
    name: 'ResumeExperienceSection',
    title: 'Resume Experience Section',
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
            name: 'experiences',
            title: 'Experiences',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "ResumeExperience"}],
                }
            ]
        },
    ]
}