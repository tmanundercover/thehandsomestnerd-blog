import {SanityImageSource} from "@sanity/asset-utils";
import {SanityMenuContainer, SanityRef, SanitySlug} from "../common/sanityIo/Types";
import {FileAsset, ImageAsset} from "@sanity/types";

export type HeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground: SanityImageAsset
    contentTitle: string
    contentBullets: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type AboutAndaCardSectionType = {
    name: string
    title: string
    cardImage: SanityImageAsset
    cardImageAltText: string
    cardImageBackground: SanityImageAsset
    contentTitle: string
    contentLeft: string
    contentRight: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WhySwitchReasonType = {
    icon: SanityImageAsset
    iconAlt: string
    text: string
}

export type WhySwitchSectionType = {
    _id: string
    imageSrc: SanityImageAsset
    imageAlt: string
    reasons: WhySwitchReasonType[]
}

export type CryptoInYourPocketSectionType = {
    name: string
    title: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    bullets: WhySwitchReasonType[]
    ctaHeader1: string
    ctaText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type SanityImageAsset = SanityImageSource | {
    _type: string,
    asset: {
        _ref: string,
        _type: "reference"
    }
}

// Transform Types
export type ThwHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type ServiceAmenityTypeRef = SanityRef
export type ServiceAmenityType = {
    name: string
    imageSrc: SanityImageAsset
    title: string
    description: string
}


export type ThwPositivePsychologySectionType = {
    name: string
    superTitle: string
    contentTitle: string
    contentText: string
    contentBullets: string[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ProprietorAtAGlanceType = {
    serviceName: string
    serviceTitle: string
    sessionList: string[]
    dividerImage: SanityImageAsset
    amenitiesSectionTitle: string
    amenities: string[]
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwAboutProprietorSectionType = {
    name: string
    proprietorImage: SanityImageAsset
    proprietorName: string
    proprietorTitle: string
    proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    contentText: string[]
    proprietorImageAltText: string
    proprietorSignatureImage: SanityImageAsset
    proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwMottoSectionType = {
    name: string
    contentText: string
    parallaxImage: SanityImageAsset
    contentSuperTitle: string
}

export type ThwServiceItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type ThwServiceItemNoRefType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}


export type ThwServicesSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: ThwServiceItemNoRefType[]
}
export type ThwWhyChooseUsSectionType = {
    name: string
    sectionTitle: string
    prosList: SanityRef[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwWhyChooseUsItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
}

export type MfbtContactUsSectionType = {
    name: string
    bgImageSrc: SanityImageAsset
    lhsTitle: string
    lhsContentText: string
    phone?: string
    email?: string,
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    youtube?: string,
    rhsTitle: string,
    formSubmitButtonText: string
}


//MixedFeelingsByT Types
export type MfbtHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type MfbtAboutProprietorSectionType = {
    name: string
    proprietorImage: SanityImageAsset
    proprietorName: string
    proprietorTitle: string
    // proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    favDrinkTitle: string
    favDrinkSectionTitle: string
    favDrinkImage: SanityImageAsset
    favDrinkImage2: SanityImageAsset
    favDrinkDescription: string
    contentText: string[]
    proprietorImageAltText: string
    // proprietorSignatureImage: SanityImageAsset
    // proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type MfbtPaymentMethodSectionType = {
    name: string
    title: string
    mainPaymentImage: SanityImageAsset,
    mainPaymentName: string,
    paymentImage1: SanityImageAsset,
    paymentName1: string,
    paymentImage2: SanityImageAsset,
    paymentName2: string,
    paymentImage3: SanityImageAsset,
    paymentName3: string,
}

export type MfbtTeamSectionType = {

    name: string
    contentPretitle: string
    contentTitle: string
    contentTexts: string[],
    teamList: MfbtTeamMember[],
}

export type MfbtMixedListSectionType = {

    name: string
    contentPretitle: string
    contentTitle: string
    contentTexts: string[],
    mixedList: MfbtMixedListItemType[],
}

export type MfbtMixedListItemType =  {
    categoryName: string,
    image: SanityImageAsset,
    drinkName: string,
    description: string,
    isEnabled:string,
}
export type MfbtGallerySectionType = {

    name: string
    contentPretitle: string
    contentTitle: string
    contentTexts: string[],
    gallery: SanityImageAsset[],
}

export type MfbtTeamMember =  {
    image: SanityImageAsset,
    title: string,
    firstName: string,
    lastName: string,
    homeCity:string,
    homeState:string,
    hobby:string,
    faveDrinkToMake:string,
}

export type MfbtServicesSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: MfbtServiceItemNoRefType[]
}

export type MfbtServiceItemNoRefType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    // educationPageTitle: string
    // educationPageSlimHeroImage: SanityImageAsset
    // extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type HeaderSectionType = {
    name:string
    headerMenuRef: SanityMenuContainer
}

export type FooterSectionType = {
    name:string
    footerMenuRef: SanityMenuContainer
}
