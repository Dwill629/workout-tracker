const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: { type: Date, default: () => new Date() },
    exercises: Array
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual('totalDuration').get(function () {
  const duration = this.exercises.reduce((acc, cur) => {
    return acc + cur.duration;
  }, 0);

  return duration;
});