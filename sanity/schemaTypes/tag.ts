import {defineType} from 'sanity'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'tagName',
      title: 'Tag Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'tagName',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
})
