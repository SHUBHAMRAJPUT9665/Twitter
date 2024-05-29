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
const Hashtag = mongoose.model("Hashtag", hashTagSchema);
export default Hashtag
 