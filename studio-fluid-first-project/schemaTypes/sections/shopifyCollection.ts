import {defineField, defineType} from 'sanity'

export const shopifyCollectionType = defineType({
  name: 'shopifyCollection',
  title: 'Shopify Collection',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      name: 'createdAt',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptionHtml',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gid',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'id',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isDeleted',
      type: 'boolean',
    }),
    defineField({
      name: 'slug',
      type: 'object',
      fields: [
        defineField({
          name: 'current',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'sortOrder',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
    })
  ],
  preview: {
    select: {
      title: 'title',
      imageUrl: 'imageUrl',
      type: 'shopify.asset',
    },
    prepare(selection) {
      return {
        title: selection.title,
        imageUrl: selection.imageUrl,
      }
    }
  }
})
