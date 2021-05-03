export default {
  type: "object",
  name: "workoutWithWeek",
  fields: [
    {
      title: "Week",
      name: "week",
      type: "number",
    },
    {
      title: "Workout",
      name: "Workout",
      type: "reference",
      to: [{ type: "workout" }],
    },
  ],
};
