import {SanitySectionTitlesEnum} from "./sections/transform-hw/sectionTitles";

export default {
  name: 'contentContainer',
  title: 'Content Container',
  type: 'object',
  fields: [
    {
      title: 'Content',
      description: 'Content',
      name: 'content',
      type: 'array',
      of: [
        // {type:"heroContentSection"},
        // {type:"whySwitchSection"},
        // {type:"aboutAndaCardSection"},
        // {type:"cryptoInYourPocketSection"},
        {
          name: 'column1BlockContent',
          title: 'Custom 1 Column Section',
          type: 'reference',
          to: [{type: 'column1BlockContent'}]
        },
        {name: 'column2BlockContent', title: 'Custom 2 Column Section',type: 'reference', to: [{type: 'column2BlockContent'}]},
        {name: 'header', title: 'Header Menu',type: 'reference', to: [{type: 'menuContainer',}]},
        {name: 'footer', title: 'Footer Menu',type: 'reference', to: [{type: 'menuContainer',}]},
        {name: 'transformServiceItem', title: 'Business Service',type: 'reference', to: [{type: 'transformServiceItem'}]},
        {name: 'heroContentSection', title: 'Hero + Content Section',type: 'reference', to: [{type: 'heroContentSection'}]},
        {name: 'transformHeroContentSection', title: SanitySectionTitlesEnum.HERO_CONTENT,type: 'reference', to: [{type: 'transformHeroContentSection'}]},
        {name: 'mfbtHeroContentSection', title: "MFBT Hero Image + Content section",type: 'reference', to: [{type: 'mfbtHeroContentSection'}]},
        {name: 'mfbtAboutProprietorSection', title: "MFBT 1/3 Image + 2/3 Content",type: 'reference', to: [{type: 'mfbtAboutProprietorSection'}]},
        {name: 'mfbtPaymentMethods', title: "MFBT 4 icons",type: 'reference', to: [{type: 'mfbtPaymentMethods'}]},
        {name: 'MfbtTeamSection', title: "MFBT Team Section",type: 'reference', to: [{type: 'MfbtTeamSection'}]},
        {name: 'MfbtGallerySection', title: "MFBT Gallery Section",type: 'reference', to: [{type: 'MfbtGallerySection'}]},
        {name: 'MfbtMixedListSection', title: "MFBT Mixed List Section",type: 'reference', to: [{type: 'MfbtMixedListSection'}]},
        {name: 'MfbtServicesSection', title: "MFBT Services Section",type: 'reference', to: [{type: 'MfbtServicesSection'}]},
        {name: 'MfbtContactUsSection', title: "MFBT Contact Us",type: 'reference', to: [{type: 'MfbtContactUsSection'}]},
        {name: 'transformPositivePsychologySection', title: SanitySectionTitlesEnum.POSITIVE_PSYCHOLOGY,type: 'reference', to: [{type: 'transformPositivePsychologySection'}]},
        {name: 'transformMottoSection', title: SanitySectionTitlesEnum.MOTTO,type: 'reference', to: [{type: 'transformMottoSection'}]},
        {name: 'transformAboutProprietorSection', title: SanitySectionTitlesEnum.ABOUT_PROPRIETOR,type: 'reference', to: [{type: 'transformAboutProprietorSection'}]},
        {name: 'transformServicesSection', title: SanitySectionTitlesEnum.SERVICES,type: 'reference', to: [{type: 'transformServicesSection'}]},
        {name: 'transformWhyChooseUsSection', title: SanitySectionTitlesEnum.WHY_CHOOSE_US,type: 'reference', to: [{type: 'transformWhyChooseUsSection'}]},
        {name: 'transformContactUsSection', title: SanitySectionTitlesEnum.CONTACT_US,type: 'reference', to: [{type: 'transformContactUsSection'}]},
        {name: 'whySwitchSection', title: 'Image + 6 Bullets Section',type: 'reference', to: [{type: 'whySwitchSection'}]},
        {name: 'aboutAndaCardSection', title: 'Pink Image + Content',type: 'reference', to: [{type: 'aboutAndaCardSection'}]},
        {name: 'cryptoInYourPocketSection', title: 'Image + 3 Bullets + Banner w/CTA',type: 'reference', to: [{type: 'cryptoInYourPocketSection'}]}
        // {type: "column2BlockContent"},
        // {type: "heroImageNameCareer"},
        // {type: "aboutMe"},
        // {type: "selectedWorks"},
        // {type: "skillsSection"},
        // {type: "latestNewsSection"},
        // {type: "contactUs"},
        // {type: "bookMe"},
        // {type: "blogPostSection"},
        // {type: "pointOfInterestSection"},
        // {type: "modernServicesSection"},
        // {type: "selectedWorksAnimated"}
      ]
    }
  ]
}