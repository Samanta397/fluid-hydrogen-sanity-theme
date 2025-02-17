import {defineField, defineType} from 'sanity'

export const emailSignupType = defineType({
  name: 'emailSignup',
  title: 'Email Signup',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      type: 'string',
    }),
    defineField({
      name: 'emailForm',
      type: 'boolean',
    })
  ],
  preview: {
    select: {
      title: 'heading',
    },
  }
})
