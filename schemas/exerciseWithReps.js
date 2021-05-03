export default {
  type: "object",
  name: "exerciseWithReps",
  fields: [
    {
      title: "Reps",
      name: "reps",
      type: "number",
    },
    {
      title: "Exercise",
      name: "exercise",
      type: "reference",
      to: [{ type: "exercise" }],
    },
  ],
};
