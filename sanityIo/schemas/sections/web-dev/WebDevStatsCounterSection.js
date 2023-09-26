
export default {
  name: 'WebDevStatsCounterSection',
  title: "Web Dev Stats Counter",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of:[{type: 'WebDevStatistic'}]
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}



