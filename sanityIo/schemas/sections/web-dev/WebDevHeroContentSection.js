export default {
  name: 'WebDevHeroContentSection',
  title: 'Web Dev Hero Image + Content section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heroImageBackground',
      title: 'Hero Image Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'text',
    },
    {
      name: 'ctaButtonTitle',
      title: 'CTA Button Title',
      type: 'string'
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'heroImageBackground',
    },
  },
}



