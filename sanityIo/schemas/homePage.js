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
            type: 'text',
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
            name: 'headerMenuRef',
            title: 'Header Menu',
            type: 'reference',
            to: [{type:'menuContainer'}]
        },
        {
            name: 'pageContent',
            title: 'Page Content',
            type: 'contentContainer',
        },
        {
            name: 'footerMenuRef',
            title: 'Footer Menu',
            type: 'reference',
            to: [{type:'menuContainer'}]
        },
        {
            name: 'servicesAvailable',
            title: 'Other Services',
            type: "array",
            of: [
                {name: "transformServiceItem", title: "THW service", type: "reference", to:[{type: "transformServiceItem"}]},
                {name: "mfbtServiceItem", title:"MFBT Service", type: "reference", to:[{type: "mfbtServiceItem"}]},
            ]
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
            name: 'address',
            title: 'Physical Address',
            type: 'string',
        },
        {
            name: 'email',
            title: 'email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
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
            name: 'isUnderConstruction',
            title: 'Is Under Construction',
            type: 'boolean',
        },
        {
            name: 'underConstructionPageRef',
            title: 'Under Construction Page',
            type: 'reference',
            to:[{type: 'transformUnderConstructionPage'}]
        },
    ]
}