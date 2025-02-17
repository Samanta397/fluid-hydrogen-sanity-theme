import {defineField, defineType} from "sanity";

export const variantType = defineType({
  name: 'variant',
  title: 'Variant',
  type: 'document',
  fields: [
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
      name: 'isDeleted',
      type: 'boolean',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'sku',
      type: 'string',
    }),
    defineField({
      name: 'available',
      type: 'number',
    }),
    defineField({
      name: 'compareAtPrice',
      type: 'number',
    }),
    defineField({
      name: 'weight',
      type: 'number',
    }),
    defineField({
      name: 'weightUnit',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'object',
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
        }),
        defineField({
          name: 'src',
          type: 'url',
        }),
      ],
    }),
  ]
})