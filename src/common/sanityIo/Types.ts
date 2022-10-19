import {SanityImageSource} from "@sanity/asset-utils";

export type SanityRepositoryType = {
  _type: string,
  service: string,
  slug: SanitySlug,
  repoLink: SanityUrl,
  author: {name: string, image: any, _id: string}
}

export type SanitySourceCodeType<T> = {
  filename?: string,
  slug?: SanitySlug,
  repoLink?: T,
  theCode?: any,
  links?: {url:string, text:string}[]
}

export type SanitySlug = {
  _type: string,
  current: string
}

export type SanityUrl = {
  url: string,
  text: string
}

export declare type SanityRef = {
  _type: string;
  _ref: string;
  _key?: string;
};


export declare type SanityColdLead = {
  email: string,
  leadName?:string,
  leadPhone?:string,
  leadMessage?:string,
  source?: string
}

export type SanityTransformHwHomePage = {
  title?: string
  description?: string
  imgSrc?: SanityImageSource
  metaImage?: SanityImageSource
  slug?: any
  pageContent?: any
  structuredData?: any
  facebook?: string
  facebookIconSrc?: SanityImageSource
  twitter?: string
  twitterIconSrc?: SanityImageSource
  instagram?: string
  instagramIconSrc?: SanityImageSource
  androidPlayStoreLink?: string
  androidPlayStoreIconSrc?: string
  appStoreLink?: string
  appStoreIconSrc?: string
  fdicDisclaimer?: string
  fdicImage?: string
  isUnderConstruction?: boolean
  releaseDate?: Date
}