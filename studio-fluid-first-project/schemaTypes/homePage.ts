import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerSections',
      type: 'array',
      title: 'Header section',
      of: [
        {type: 'announcementBar'},
        {type: 'header'},
      ]
    }),
    defineField({
      name: 'template',
      type: 'array',
      title: 'Template sections',
      of: [
        {type: 'richText'},
        {type: 'collage'},
        {type: 'featuredCollection'},
      ],
    }),
    defineField({
      name: 'footerSections',
      type: 'array',
      title: 'Footer section',
      of: [
        {type: 'emailSignup'},
      ],
    })
  ],

})
