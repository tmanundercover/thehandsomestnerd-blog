import {SanitySectionTitlesEnum} from "../sectionTitles";

export default {
  name: 'transformServiceItem',
  title: 'THW Service Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageSrcAltText',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'string'
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string'
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string'
    },
    {
      name: 'learnMoreText',
      title: 'Learn More Text',
      type: 'string'
    },
    {
      name: 'learnMoreLink',
      title: 'Learn More Link',
      type: 'string'
    },
    {
      name: 'educationPageTitle',
      title: 'Education Page Title',
      type: 'string',
    },
    {
      name: 'educationPageSlimHeroImage',
      title: 'Education Page Slim Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'extendedDescriptions',
      title: 'Extended Description Content',
      type: 'array',
      of:[{type: 'string'}]
    },
    {
      name: 'benefitsOfServiceTitle',
      title: 'Benefits of Service Title',
      type: 'string',
    },
    {
      name: 'benefitsOfServiceContents',
      title: 'Benefits of Service Contents',
      type: 'array',
      of:[{type: 'string'}]
    },
    {
      name: 'benefitsOfServiceBullets',
      title: 'Benefits of Service Bullets',
      type: 'array',
      of:[{type: 'string'}]
    },
    {
      name: 'serviceAmenities',
      title: 'Service Amenities',
      type: 'array',
      of: [{type: 'reference', to: {type: 'transformServiceAmenityItem'}}]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageSrc',
    },
  },
}



