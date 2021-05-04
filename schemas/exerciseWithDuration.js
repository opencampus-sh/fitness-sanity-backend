export default {
  type: "object",
  name: "exerciseWithDuration",
  fields: [
    {
      title: "Duration",
      name: "duration",
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
