export default {
  name: "exercise",
  title: "Exercise",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Strength", value: "strength" },
          { title: "Cardio", value: "cardio" },
          { title: "Coordination", value: "coordination" },
          { title: "Mobility", value: "mobility" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
};
