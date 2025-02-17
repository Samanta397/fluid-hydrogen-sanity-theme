import {defineField, defineType} from 'sanity'

export const announcementBarType = defineType({
  name: 'announcementBar',
  title: 'Announcement Bar',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
      // validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
  }
})
