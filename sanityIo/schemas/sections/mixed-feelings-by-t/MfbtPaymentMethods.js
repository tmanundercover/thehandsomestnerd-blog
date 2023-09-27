
export default {
  name: 'mfbtPaymentMethods',
  title: "MFBT 4 icons",
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
      name: 'mainPaymentImage',
      title: 'Main Payment Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainPaymentName',
      title: 'Main payment Name',
      type: 'string',
    },
    {
      name: 'paymentImage1',
      title: 'Payment 1 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'paymentName1',
      title: 'Payment 1 Name',
      type: 'string',
    },
    {
      name: 'paymentImage2',
      title: 'Payment 2 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'paymentName2',
      title: 'Payment 2 Name',
      type: 'string',
    },
    {
      name: 'paymentImage3',
      title: 'Payment 3 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'paymentName3',
      title: 'Payment 3 Name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'proprietorImage',
    },
  },
}



