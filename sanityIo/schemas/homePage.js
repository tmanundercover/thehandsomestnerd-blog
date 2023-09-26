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
            name: 'businessCardImageSrc',
            title: 'Business Card Image',
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
            name: 'website',
            title: 'Website(Featured Link)',
            type: 'string',
        },
        {
            name: 'websiteQrCode',
            title: 'Website Qr Code',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bookAppointmentLink',
            title: 'Book Appointment Link',
            type: 'string',
        },
        {
            name: 'googleReviewLink',
            title: 'Google Review Link',
            type: 'string',
        },
        {
            name: 'bookAppointmentQrCode',
            title: 'Book Appointment Qr Code',
            type: 'image',
            options: {
                hotspot: true,
            },
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
            name: 'headerContent',
            title: 'Header Content',
            type: 'headerContentContainer',
        },
        {
            name: 'pageContent',
            title: 'Page Content',
            type: 'contentContainer',
        },
        {
            name: 'footerContent',
            title: 'Footer Content',
            type: 'footerContentContainer',
        },
        {
            name: 'servicesAvailable',
            title: 'Other Services',
            type: "array",
            of: [{type: "reference", to:[{type: "transformServiceItem"}]},
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
            name: 'linkedIn',
            title: 'LinkedIn Handle',
            type: 'string',
        },
        {
            name: 'linkedInIconSrc',
            title: 'LinkedIn Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'github',
            title: 'Github Handle',
            type: 'string',
        },
        {
            name: 'githubIconSrc',
            title: 'GitHub Icon',
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
            name: 'isFabActivated',
            title: 'Is Fab Active',
            type: 'boolean',
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