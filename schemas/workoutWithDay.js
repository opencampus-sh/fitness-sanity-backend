export default {
  type: "object",
  name: "workoutWithDay",
  fields: [
    {
      title: "Day",
      name: "day",
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
