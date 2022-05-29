export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'metaImage',
            title: 'An Image for the meta tags',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title(Title in Browser Tab)',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description(Meta tag description)',
            type: 'string',
        },
        {
            name: 'structuredData',
            title: 'Structured Data(For this page)',
            type: "array",
            of: [{type: "structuredDataProduct"},
                {type:"structuredDataEvent"},
              ]
        },
        {
            name: 'pageContent',
            title: 'Page Content',
            type: 'contentContainer',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },

        {
            name: 'facebook',
            title: 'Facebook Handle',
            type: 'string',
        },
        {
            name: 'facebookIconSrc',
            title: 'Facebook Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'twitter',
            title: 'Twitter Handle',
            type: 'string',
        },
        {
            name: 'twitterIconSrc',
            title: 'Twitter Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'instagram',
            title: 'Instagram Handle',
            type: 'string',
        },
        {
            name: 'instagramIconSrc',
            title: 'Instagram Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'androidPlayStoreLink',
            title: 'Android Play Store Link',
            type: 'string',
        },
        {
            name: 'androidPlayStoreIconSrc',
            title: 'Android Play Store Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'appStoreLink',
            title: 'iOS App Store Link',
            type: 'string',
        },
        {
            name: 'appStoreIconSrc',
            title: 'iOS App Store Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'fdicImage',
            title: 'FDIC Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'fdicDisclaimer',
            title: 'FDIC Disclaimer',
            type: 'string',
        },
    ]
}