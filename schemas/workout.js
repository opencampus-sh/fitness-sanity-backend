export default {
  name: "workout",
  title: "Workout",
  type: "document",
  icon,
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
      name: "exercises",
      title: "Exercises",
      type: "array",
      of: [{ type: "reference", to: [{ type: "exercise" }] }],
    },
    {
      name: "calories",
      title: "Calories",
      type: "number",
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
      name: "poster",
      title: "Poster Image",
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
};
