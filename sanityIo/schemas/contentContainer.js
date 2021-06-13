export default {
  name: 'contentContainer',
  title: 'Content Container',
  type: 'object',
  fields: [
    {
      title: "Content",
      description: "Content",
      name: "content",
      type: "array",
      of: [{type: "column1BlockContent"},
        {type: "column2BlockContent"},
        {type: "heroImageNameCareer"},
        {type: "aboutMe"},
        {type: "selectedWorks"},
        {type: "skillsSection"},
        {type: "latestNewsSection"},
        {type: "contactUs"},
        {type: "bookMe"},
        {type: "blogPostSection"},
      ]
    }
  ],
}