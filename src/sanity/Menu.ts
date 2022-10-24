// export type SanityMenu = {
//   title?: string,
//   slug?: any,
//   menuTitle?: string,
//   menuItems?: SanityMenuGroup[]
// }
//
import {SanitySlug} from "../common/sanityIo/Types";
import {SanityImageAsset} from "@sanity/asset-utils";

export type SanityMenuItem = {
  _type: string
  title?: string,
  displayText?: string,
  url?: string,
  isContainedButton?: boolean,
  isOutlinedButton?: boolean
}

export type SanityMenuGroup = {
  _type:string
  title?: string,
  slug?: SanitySlug,
  menuGroupTitle?: string,
  links?: SanityMenuItem[],
  logoImage?: any
  displayText?: string
}

export type SanityMenuContainer = {
  title?: string,
  slug?: SanitySlug,
  displayText?: string,
  subMenus?: SanityMenuGroup & SanityMenuItem[]
  logoImageAltText?: string
  logoImageSrc?: SanityImageAsset
}

// export type SanityMenuContainer = {
//   title?: string,
//   slug?: any,
//   menuTitle?: string,
//   menuLinks?: SanityMenuItem[]
// }