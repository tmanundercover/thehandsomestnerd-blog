export default {
  name: 'MfbtMixedListItem',
  title: 'Mfbt Mixed List Item',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'drinkName',
      title: 'Drink Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'isEnabled',
      title: 'Enabled?',
      type: 'boolean',
    },
  ],
};
