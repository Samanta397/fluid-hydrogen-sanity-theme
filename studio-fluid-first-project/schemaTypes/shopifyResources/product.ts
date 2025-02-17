import {defineField, defineType} from "sanity";

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'store',
      type: 'object',
      title: 'Store',
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

        defineField({
          name: 'options',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                }),
                defineField({
                  name: 'values',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'priceRange',
          type: 'object',
          fields: [
            defineField({
              name: 'minVariantPrice',
              type: 'number',
            }),
            defineField({
              name: 'maxVariantPrice',
              type: 'number',
            }),
          ],
        }),

        defineField({
          name: 'productType',
          type: 'string',
        }),

        defineField({
          name: 'tags',
          type: 'string',
        }),

        defineField({
          name: 'variants',
          type: 'array',
          of: [
            {
              type: 'reference',
              weak: true,
              to: [
                {
                  type: 'variant',
                },
              ],
              hidden: true,
            },
          ],
        })


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
