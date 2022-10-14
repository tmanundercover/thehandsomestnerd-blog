export default {
  name: 'coldLead',
  title: 'Cold Lead',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (thisPost)=>{
          return thisPost.email.replace('@','-')
        },
        maxLength: 96,
      },
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
  ],
}
