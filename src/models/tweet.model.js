import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "tweet cannot be more then 250 character"],
      lowercase:true,
      trim:true,
    },
    hashtags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet
