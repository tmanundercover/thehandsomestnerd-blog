// export type SanityMenu = {
//   title?: string,
//   slug?: any,
//   menuTitle?: string,
//   menuItems?: SanityMenuGroup[]
// }
//
export type SanityMenuItem = {
  title?: string,
  displayText?: string,
  url?: string,
  isContainedButton?: boolean,
  isOutlinedButton?: boolean
}

export type SanityMenuGroup = {
  title?: string,
  slug?: any,
  menuGroupTitle?: string,
  links?: SanityMenuItem[],
  logoImage?: any
}

// export type SanityMenuContainer = {
//   title?: string,
//   slug?: any,
//   menuTitle?: string,
//   menuLinks?: SanityMenuItem[]
// }