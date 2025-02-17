import {defineField, defineType} from 'sanity'

export const collageType = defineType({
  name: 'collage',
  title: 'Collage',
  type: 'object',
  fields: [
    defineField({
      name: 'collectionProducts',
      title: 'Collection products',
      type: 'reference',
      description: 'Products from this collection will be listed',
      // weak: true,

      to: [{type: 'collection', }],

    }),
  ],
  preview: {
    select: {
      title: 'collectionProducts.store.title' || 'Your collection name',
      imageUrl: 'collectionProducts.store.imageUrl' || '',
    },
    // prepare(selection) {
    //   console.log('>>>', selection)
    //   return {
    //     title: 'sss',
    //   }
    // }
  }
})
