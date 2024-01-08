// const mongoose = require("mongoose");

// const propmptSchema = new mongoose.Schema({
//   creator: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//   },
//   prompt: {
//     type: String,
//     required: [true, "prompt is required"],
//   },

//   tag: {
//     type: String,
//     required: [true, "tag is required"],

//   },
// });

// const Prompt = mongoose.models.Prompt || mongoose.model("prompt", propmptSchema);

// export default Prompt;

// ------------------- 


import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;