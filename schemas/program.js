export default {
  name: "program",
  title: "Program",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Titel eines Workout Programms",
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
      name: "workouts",
      title: "Workouts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "workout" }] }],
    },
    {
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Hard", value: "hard" },
        ],
        layout: "radio",
      },
    },
    {
      name: "focus",
      title: "Focus",
      type: "string",
      options: {
        list: [
          { title: "Weightloss", value: "weightloss" },
          { title: "Strength", value: "strength" },
          { title: "Cardio", value: "cardio" },
        ],
        layout: "radio",
      },
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     media: "movie.poster",
  //   },
  // },
};
