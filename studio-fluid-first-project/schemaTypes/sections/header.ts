import {defineField, defineType} from 'sanity'

export const headerType = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navLinks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        }],
    }),
    defineField({
      name: 'enableSearch',
      type: 'boolean',
    }),
    defineField({
      name: 'enableLogin',
      type: 'boolean',
    }),
    defineField({
      name: 'enableCart',
      type: 'boolean',
    })
  ],
})
