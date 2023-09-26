
export default {
  name: 'ResumeContactUsSection',
  title: "Resume Contact Us Section",
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
      name: 'formSubmitButtonText',
      title: 'Form Submit Button Text',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'bgImageSrc',
    },
  },
}



