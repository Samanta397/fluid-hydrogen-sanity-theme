import {defineField, defineType} from 'sanity'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'store',
      type: 'object',
      title: 'Store',
      fields: [
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
          // validation: (rule) => rule.required(),
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
          validation: (rule) => rule.required(),
        }),

        defineField({
          name: 'disjunctive',
          type: 'boolean',
        }),

        defineField({
          name: 'rules',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'column',
                  type: 'string',
                }),
                defineField({
                  name: 'condition',
                  type: 'string',
                }),
                defineField({
                  name: 'relation',
                  type: 'string',
                }),
                defineField({
                  name: 'value',
                  type: 'string',
                }),
              ],
            }],
        })
      ],
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'collectionProducts',
      type: 'reference',
      weak: true,
      to: [{type: 'product'}],
      hidden: true,
    })
  ],
  preview: {
    select: {
      title: 'store.title' || 'Your collection name',
      imageUrl: 'store.imageUrl',
    },
    // prepare(selection) {
    //   console.log('selection', selection)
    //   return {
    //     title: selection.title,
    //   }
    // }

  }
})
