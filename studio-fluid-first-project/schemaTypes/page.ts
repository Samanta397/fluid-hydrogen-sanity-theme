import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'pageType',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerSections',
      type: 'array',
      title: 'HeaderLayout section',
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
