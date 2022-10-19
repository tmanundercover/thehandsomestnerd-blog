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
  title?: string,
  displayText?: string,
  url?: string,
  isContainedButton?: boolean,
  isOutlinedButton?: boolean
}

export type SanityMenuGroup = {
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
  menuItems?: SanityMenuGroup[]
  logoImageAltText?: string
  logoImageSrc?: SanityImageAsset
}

// export type SanityMenuContainer = {
//   title?: string,
//   slug?: any,
//   menuTitle?: string,
//   menuLinks?: SanityMenuItem[]
// }