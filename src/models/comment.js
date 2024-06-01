import mongoose,{Schema} from "mongoose";
const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    commentable: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
