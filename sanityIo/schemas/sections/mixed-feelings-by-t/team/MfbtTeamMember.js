export default {
  name: 'MfbtTeamMember',
  title: 'Mfbt Tteam Member',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'homeCity',
      title: 'Home City',
      type: 'string',
    },
    {
      name: 'homeState',
      title: 'Home State',
      type: 'string',
    },
    {
      name: 'hobby',
      title: 'Hobby',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'faveDrinkToMake',
      title: 'Favorite Drink to make',
      type: 'string',
    },
    {
      name: 'isEnabled',
      title: 'Enabled?',
      type: 'boolean',
    },
  ],
};
