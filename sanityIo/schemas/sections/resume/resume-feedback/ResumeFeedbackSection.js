export default {
    name: 'ResumeFeedbackSection',
    title: 'Resume Feedback Section',
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
            name: 'feedbackEntries',
            title: 'Feedback',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "ResumeFeedback"}],
                }
            ]
        },
    ]
}