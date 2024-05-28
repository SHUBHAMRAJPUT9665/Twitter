import mongoose, { Schema } from "mongoose";

const hashTagSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tweet: [
        {
          type: Schema.Types.ObjectId,
          ref: "Tweet",
        },
      ],
  },
  { timestamps: true }
);

export const Hashtag = mongoose.model("Hashtag", hashTagSchema);
 