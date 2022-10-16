import {SanityImageAsset} from "@sanity/asset-utils";

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
    logoImageSrc?: SanityImageAsset
}

export type SanityBlogCategory = {
    title: string
    description?: string | null
    color: { title: string, value: string }
}

// export type SanityImage = {
//     asset: {
//         _id: string,
//         url: string,
//         altText: string,
//         metadata: {
//             hasAlpha: boolean
//             isOpaque: boolean
//             lqip?: string
//             blurHash?: string
//             dimensions: {
//                 _type: 'sanity.imageDimensions'
//                 aspectRatio: number
//                 height: number
//                 width: number
//             }
//         },
//     }
// }

export type SanityLandingPage = {
    welcomeMessage?: string,
    mainImage?: SanityImageAsset,
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
    mainImage?: SanityImageAsset
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
    mainImage?: SanityImageAsset
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