import {SanitySectionTitlesEnum} from "./sectionTitles";

export default {
  name: 'proprietorService',
  title: SanitySectionTitlesEnum.PROPRIETOR_SERVICE,
  type: 'object',
  fields: [
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
    },
    {
      name: 'serviceTitle',
      title: 'Session Section Title',
      type: 'string',
    },
    {
      name: 'sessionList',
      title: 'What type of Sessions are Offered?',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'dividerImage',
      title: 'Divider Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'amenitiesSectionTitle',
      title: 'Modalities Title',
      type: 'string',
    },
    {
      name: 'amenities',
      title: 'Modalities',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'ctaButtonText',
      title: 'Learn More Button Text',
      type: 'string'
    },
    {
      name: 'ctaButtonLink',
      title: 'Learn More Button Link',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'serviceName',
      media: 'dividerImage',
    },
  },
}



