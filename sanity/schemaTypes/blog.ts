export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of blog article',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug of blog article',
      type: 'slug',
      options: {
        source: 'title',
        //   maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'titleImage',
      title: 'Title image',
      type: 'image',
      // options: {
      //     hotspot: true,
      // },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'smallDescription',
      title: 'Small Description',
      type: 'text',
      validation: (Rule: any) =>
        Rule.max(500).warning(`A small description shouldn't be more than 500 characters.`),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
