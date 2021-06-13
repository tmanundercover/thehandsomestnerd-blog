import {SanityImageSource} from '@sanity/image-url/lib/types/types'

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