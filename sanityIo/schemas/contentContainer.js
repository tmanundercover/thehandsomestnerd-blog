export default {
  name: 'contentContainer',
  title: 'Content Container',
  type: 'object',
  fields: [
    {
      title: 'Content',
      description: 'Content',
      name: 'content',
      type: 'array',
      of: [
        // {type:"heroContentSection"},
        // {type:"whySwitchSection"},
        // {type:"aboutAndaCardSection"},
        // {type:"cryptoInYourPocketSection"},
        {
          name: 'column1BlockContent',
          title: 'Custom 1 Column Section',
          type: 'reference',
          to: [{type: 'column1BlockContent'}]
        },
        {name: 'column2BlockContent', title: 'Custom 2 Column Section',type: 'reference', to: [{type: 'column2BlockContent'}]},
        {name: 'heroContentSection', title: 'Hero + Content Section',type: 'reference', to: [{type: 'heroContentSection'}]},
        {name: 'whySwitchSection', title: 'Image + 6 Bullets Section',type: 'reference', to: [{type: 'whySwitchSection'}]},
        {name: 'aboutAndaCardSection', title: 'Pink Image + Content',type: 'reference', to: [{type: 'aboutAndaCardSection'}]},
        {name: 'cryptoInYourPocketSection', title: 'Image + 3 Bullets + Banner w/CTA',type: 'reference', to: [{type: 'cryptoInYourPocketSection'}]}
        // {type: "column2BlockContent"},
        // {type: "heroImageNameCareer"},
        // {type: "aboutMe"},
        // {type: "selectedWorks"},
        // {type: "skillsSection"},
        // {type: "latestNewsSection"},
        // {type: "contactUs"},
        // {type: "bookMe"},
        // {type: "blogPostSection"},
        // {type: "pointOfInterestSection"},
        // {type: "modernServicesSection"},
        // {type: "selectedWorksAnimated"}
      ]
    }
  ]
}