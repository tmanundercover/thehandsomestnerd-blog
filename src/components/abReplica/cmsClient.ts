import sanityClient from '../../sanityClient'
import { SanityRef } from '../../common/sanityIo/Types'
import { WhySwitchSectionType } from '../BlockContentLayoutContainer'

export type SanityMenuItem = {
  title?: string,
  displayText?: string,
  url?: string
  isOutlinedButton?: boolean
  isContainedButton?: boolean
}

export type SanitySlug = {
  _type: string,
  current: string
}

export type SanityMenuGroup = {
  title?: string,
  menuGroupTitle?: string,
  slug?: SanitySlug,
  displayText?: string,
  links?: SanityMenuItem[]
}

export type SanityMenuContainer = {
  title?: string,
  slug?: SanitySlug,
  displayText?: string,
  menuItems?: SanityMenuGroup[]
  logoImageAltText?: string
  logoImageSrc?: SanityImage
}

export type SanityBlogCategory = {
  title: string
  description?: string | null
  color: { title: string, value: string }
}

export type SanityImage = {
  asset: {
    _id: string,
    url: string,
    altText: string,
    metadata: {
      hasAlpha: boolean
      isOpaque: boolean
      lqip?: string
      blurHash?: string
      dimensions: {
        _type: 'sanity.imageDimensions'
        aspectRatio: number
        height: number
        width: number
      }
    },
  }
}

export type SanityLandingPage = {
  welcomeMessage?: string,
  mainImage?: SanityImage,
  headerText?: string,
  body?: string,
  form?: { abFormType: { title: string }, instructionBlock: string },
  utmSource?: string,
  utmMedium?: string,
  utmCampaign?: string
}

export type SanityBlog = {
  title?: string
  slug?: SanitySlug
  mainImage?: SanityImage
  mainImageCaption?: string
  category?: SanityBlogCategory
  body?: string
  _createdAt?: string
}

export type SanityBlogGroup = {
  title?: string
  posts?: SanityBlogPreview[]
}

export type SanityBlogPreview = {
  title?: string
  slug?: SanitySlug
  mainImage?: SanityImage
  mainImageCaption?: string
  category?: SanityBlogCategory
  snippet?: string
  _createdAt?: string
}

export type BlockContentElement = {
  _key: string
  children: BlockContentElementChild[]
}

export type BlockContentElementChild = {
  _key: string
  text?: string
}

const fetchLandingPage = (slug: string): Promise<SanityLandingPage> => {
  return sanityClient
    .fetch(
      `*[_type=="landingPage" && slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         welcomeMessage,
         headerText,
         "form":abForm->{instructionBlock, abFormType->{title}},
         utmSource,
         utmMedium,
         utmCampaign,
         publishedAt
       }`,
      {slug}
    ).then((data: SanityLandingPage[]) => {
      return data[0]
    })
}

const fetchBlogPost = (slug: string): Promise<SanityBlog> => {
  return sanityClient
    .fetch(
      `*[_type=="post" && slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          mainImageCaption,
          body,
          category->{
            title,
            description,
            color
          },
          _createdAt
       }`,
      {slug}
    ).then((data: SanityBlog[]) => {
      return data[0]
    })
}

const fetchLatestBlogPostPreview = (): Promise<SanityBlogPreview> => {
  return sanityClient
    .fetch(
      `*[_type=="post"] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         "snippet": pt::text(body),
         category->{
           title,
           description,
           color
         },
         _createdAt
       }[0]`,
      {}
    ).then((data: SanityBlogPreview) => {
      return data
    })
}

const fetchAllBlogPostPreviews = (): Promise<SanityBlogPreview[]> => {
  return sanityClient
    .fetch(
      `*[_type=="post"] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          mainImageCaption,
         "snippet": pt::text(body),
         category->{
           title,
           color
         },
         _createdAt
       }`,
      {}
    ).then((data: SanityBlogPreview[]) => {
      return data
    })
}

const fetchBlogPostPreviewsByCategory = (category: string): Promise<SanityBlogPreview[]> => {
  return sanityClient
    .fetch(
      `*[_type=="post" && category._ref == *[_type == "category" && title == $category][0]._id ] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         "snippet": pt::text(body),
         category->{
           title,
           color
         },
         _createdAt
       }`,
      {category}
    ).then((data: SanityBlogPreview[]) => {
      return data
    })
}

const fetchBlogPostPreviewsByKeyword = (keyword: string): Promise<SanityBlogPreview[]> => {
  const processedKeyword = '*' + keyword + '*'

  return sanityClient
    .fetch(
      `*[_type=="post" && [title, pt::text(body)] match $processedKeyword ] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         "snippet": pt::text(body),
         category->{
           title,
           color
         },
         _createdAt
       }`,
      {processedKeyword}
    ).then((data: SanityBlogPreview[]) => {
      return data
    })
}


const fetchLandingPageHeaderMenu = (): Promise<SanityMenuContainer> => {
  return sanityClient
    .fetch(
      `*[_type=="menuContainer" && slug.current == 'header-menu']{
          title,
          slug,
         "menuItems": subMenus[]->{slug, displayText, links[] -> }
       }`)
    .then((data: SanityMenuContainer[]) => {
      return data[0]
    })
}

const fetchLandingPageFooterMenu = (footerSlug: string | undefined): Promise<SanityMenuContainer> => {
  const slug = footerSlug ?? 'footer-menu'

  return sanityClient
    .fetch(
      `*[_type=="menuContainer" && slug.current == $slug]{
          title,
          slug,
          logoImageSrc,
          logoImageAltText,
         "menuItems": subMenus[]->{slug, title, logoImage{
            asset->{
              _id,
              url
             }
           }, menuGroupTitle, links[] ->}
       }`, {slug}
    )
    .then((data: SanityMenuContainer[]) => {
      return data[0]
    })
}

const fetchBlogCategories = (): Promise<SanityBlogCategory[]> => {
  return sanityClient
    .fetch(
      `*[_type == "category"]{
        title,
        description,
        color
    }`
    )
    .then((data: SanityBlogCategory[]) => {
      return data
    })
}

const fetchBlogGroup = (title: string): Promise<SanityBlogGroup> => {
  return sanityClient
    .fetch(
      `*[_type == "postGroup" && title == $title]{
          title,
          posts[] -> { title, slug }
       }[0]`,
      {title}
    ).then((data: SanityBlogGroup) => {
      return data
    })
}
const fetchWhySwitch = async (id: string): Promise<WhySwitchSectionType> => {
  return sanityClient
    .fetch(
      `*[_id == $id]{
          imageSrc {
            asset->{
              altText,
              description
             }
          }
       }[0]`,
      {id}
    ).then((data: any) => {
      const whySwitchSection:WhySwitchSectionType = data
      console.log("why switch Section data", whySwitchSection)
      return data
    })
}

const fetchRef = (sanityRef: SanityRef): Promise<any> => {

  return sanityClient
    .fetch(
      `*[_id == $reference][0]`,
      {reference: sanityRef._ref}
    ).then((data: any) => {
      console.log('the fetched REf', sanityRef, data)
      return data
    })
}

export default {
  fetchRef,
  fetchLandingPage,
  fetchBlogPost,
  fetchLatestBlogPostPreview,
  fetchAllBlogPostPreviews,
  fetchBlogPostPreviewsByCategory,
  fetchBlogPostPreviewsByKeyword,
  fetchLandingPageHeaderMenu,
  fetchLandingPageFooterMenu,
  fetchBlogCategories,
  fetchBlogGroup,
  fetchWhySwitch
}