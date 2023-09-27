export default {
    name: 'menuItem',
    title: 'Menu Item Link',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'displayText',
            title: 'Link Text',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string'
        },
        {
            name: 'isOutlinedButton',
            title: 'Is this an outlined button',
            type: 'boolean'
        },
        {
            name: 'isContainedButton',
            title: 'Is this a contained button',
            type: 'boolean'
        },
        {
            name: 'isModalButton',
            title: 'Is this a modal button',
            type: 'boolean'
        },
        {
            name: 'modalRef',
            title: 'Which Modal',
            type: 'reference',
            to:[{type:"modal"}]
        },
    ]
}