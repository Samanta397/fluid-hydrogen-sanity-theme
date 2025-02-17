import {defineField, defineType} from 'sanity'

export const featuredCollectionType = defineType({
  name: 'featuredCollection',
  title: 'Featured Collection',
  type: 'object',
  fields: [
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        }]
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Featured Collection',
      }
    }
  }
})
