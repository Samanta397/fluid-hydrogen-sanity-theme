import {defineField, defineType} from "sanity";

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'store',
      type: 'object',
      title: 'Store1',
      fields: [
        defineField({
          name: 'vendor',
          type: 'string',
        }),
        defineField({
          name: 'isDeleted',
          type: 'boolean',
        }),
        defineField({
          name: 'status',
          type: 'string',
        }),
        defineField({
          name: 'gid',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'createdAt',
          type: 'datetime',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'descriptionHtml',
          type: 'string',
        }),
        defineField({
          name: 'id',
          type: 'number',
          validation: (rule) => rule.required(),
        }),

        defineField({
          name: 'previewImageUrl',
          type: 'url',
        }),
        defineField({
          name: 'title',
          type: 'string',
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

      ],
    }),

  ],
  preview: {
    select: {
      title: 'store.title' ,
      imageUrl: 'store.previewImageUrl',
    },

  }
})
