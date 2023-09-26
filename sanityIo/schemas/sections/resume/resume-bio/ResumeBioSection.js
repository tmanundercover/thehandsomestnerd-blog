export default {
    name: 'ResumeBioSection',
    title: 'Resume Bio Section',
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
            name: 'careerTitle',
            title: 'Career Title',
            type: 'string',
        },
        {
            name: 'yearsOfExperience',
            title: 'Years of Experience',
            type: 'number',
        },
        {
            name: 'skillWordCloud',
            title: 'Skill Word Cloud',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "ResumePortfolioItem"}],
                }
            ]
        },
        {
            name: 'contactMeButtonTitle',
            title: 'Contact Me Button Text',
            type: 'string',
        },
        {
            name: 'resumeFileDownloadText',
            title: 'Resume File Download Text',
            type: 'string',
        },
        {
            name: 'resumeFile',
            title: 'Upload Resume',
            type: 'ResumeFile',
        },
        {
            name: 'cvFileDownloadText',
            title: 'CV File Download Text',
            type: 'string',
        },
        {
            name: 'cvFile',
            title: 'Upload CV',
            type: 'ResumeFile',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}