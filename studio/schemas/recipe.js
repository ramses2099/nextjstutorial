export default {
  title: 'Recipe',
  name: 'recipe',
  type: 'document',
  fields: [
    {
      title: 'Recipe Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Chef',
      name: 'chef',
      type: 'reference',
      to: {type: 'chef'},
    },
    {
      title: 'Recipe Main Image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Ingredient',
      name: 'ingredient',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Ingredient',
              name: 'ingredient',
              type: 'reference',
              to: [{type: 'ingredient'}],
            },
            {
              title: 'Whole Number',
              name: 'wholenumber',
              type: 'number',
            },
            {
              title: 'Fraction',
              name: 'fraction',
              type: 'string',
              options: {
                list: ['1/2', '1/3', '1/4'],
              },
            },
            {
              title: 'Unit',
              name: 'unit',
              type: 'string',
              options: {
                list: ['grams', 'cup', 'Tbsp.'],
              },
            },
          ],
          preview: {
            select: {
              title: 'ingredient.name',
              name: 'ingredient.name',
              media: 'ingredient.image',
              wholeNumber: 'wholenumber',
              fraction: 'fraction',
              unit: 'unit',
            },
            prepare({
              title,
              subtitle,
              media,
              wholeNumber = '(No whole number set)',
              fraction = '(No fraction set)',
              unit = '(No unit set)',
            }) {
              return {
                title,
                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                media,
              }
            },
          },
        },
      ],
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
