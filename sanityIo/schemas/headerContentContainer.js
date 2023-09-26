export default {
  name: 'headerContentContainer',
  title: 'Header Content Container',
  type: 'object',
  fields: [
    {
      title: 'Content',
      description: 'Header Content',
      name: 'content',
      type: 'array',
      of: [
        // {
        //   name: 'column1BlockContent',
        //   title: 'Custom 1 Column Section',
        //   type: 'reference',
        //   to: [{type: 'column1BlockContent'}]
        // },
        // {name: 'column2BlockContent', title: 'Custom 2 Column Section',type: 'reference', to: [{type: 'column2BlockContent'}]},
        // {name: 'header', title: 'Header Menu',type: 'reference', to: [{type: 'menuContainer',}]},
        // {name: 'footer', title: 'Footer Menu',type: 'reference', to: [{type: 'menuContainer',}]},
        {name: 'Header Section', title: 'Header Section',type: 'reference', to: [{type: 'HeaderSection'}]},
        {name: 'Development Header Section', title: 'Development Header Section',type: 'reference', to: [{type: 'DevelopmentHeaderSection'}]},
      ]
    }
  ]
}