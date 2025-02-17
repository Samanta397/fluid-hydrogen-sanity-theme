import {defineField, defineType} from 'sanity'

export const collageType = defineType({
  name: 'collage',
  title: 'Collage',
  type: 'object',
  fields: [
    defineField({
      name: 'collectionProducts',
      title: 'Collection products',
      type: 'array',
      description: 'Products from this collection will be listed',
      of: [
        {
          type: 'reference',
          to: [{type: 'collection'}],
        }
      ],

    }),
  ],
  preview: {
    // select: {
    //   title: 'title' || 'Your collection name',
    //   // imageUrl: 'collectionProducts.store.imageUrl' || '',
    // },
    prepare(selection) {
      return {
        title: 'Collage',
      }
    }
  }
})
