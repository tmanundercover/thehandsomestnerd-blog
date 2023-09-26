export default {
  name: 'footerContentContainer',
  title: 'Footer Content Container',
  type: 'object',
  fields: [
    {
      title: 'Content',
      description: 'Footer Content',
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
        // {name: 'footer', title: 'Footer Menu',type: 'reference', to: [{type: 'menuContainer',}]},
        // {name: 'footer', title: 'Footer Menu',type: 'reference', to: [{type: 'menuContainer',}]},
        {name: 'Footer Section', title: 'Footer Section',type: 'reference', to: [{type: 'FooterSection'}]},
        {name: 'Development Footer Section', title: 'Development Footer Section',type: 'reference', to: [{type: 'DevelopmentFooterSection'}]},
      ]
    }
  ]
}