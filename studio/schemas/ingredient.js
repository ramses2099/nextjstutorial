export default {
    title: 'Ingredient',
    name: 'ingredient',
    type: 'document',
    fields: [
      {
        title: 'Ingredient Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        title: 'Note',
        name: 'Note',
        type: 'text',        
      },
    ],
  }
  