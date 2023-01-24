const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [60, 'name can not be more than 60 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)
