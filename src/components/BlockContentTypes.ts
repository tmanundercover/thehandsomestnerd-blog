import {SanityImageAsset} from "@sanity/asset-utils";

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
    _id:string
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