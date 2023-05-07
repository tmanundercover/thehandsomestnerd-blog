
export default {
  name: 'mfbtAboutProprietorSection',
  title: "MFBT 1/3 Image + 2/3 Content",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'proprietorImage',
      title: 'Proprietor Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'proprietorName',
      title: 'Proprietor Name',
      type: 'string',
    },
    {
      name: 'proprietorTitle',
      title: 'Proprietor Title',
      type: 'string',
    },
    // {
    //   name: 'proprietorServices',
    //   title: 'Therapeutic Services',
    //   type: 'proprietorService',
    // },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'array',
      of:[{type: 'text'}]
    },
    {
      name: 'proprietorImageAltText',
      title: 'Proprietor Image Alt Text',
      type: 'string'
    },

    {
      name: 'favDrinkTitle',
      title: 'Favorite Drink Name',
      type: 'string',
    },
    {
      name: 'favDrinkSectionTitle',
      title: 'Favorite Drink Section Name',
      type: 'string',
    },
    {
      name: 'favDrinkDescription',
      title: 'Favorite Drink Description',
      type: 'text',
    },
    {
      name: 'favDrinkImage',
      title: 'Favorite Drink Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favDrinkImage2',
      title: 'Favorite Drink Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'proprietorSignatureImage',
    //   title: 'Proprietor Signature Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: 'proprietorSignatureImageAltText',
    //   title: 'Proprietor Signature Image Alt Text',
    //   type: 'string'
    // },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
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
      media: 'proprietorImage',
    },
  },
}



