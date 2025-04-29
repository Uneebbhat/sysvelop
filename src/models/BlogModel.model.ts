import mongoose, { Document, Schema, Types } from "mongoose";

interface IBlog extends Document {
  authorId: Types.ObjectId;
  image?: File | string;
  title: string;
  tags: string[];
  description: string;
  content: string;
}

const BlogModel: Schema<IBlog> = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author ID is required"],
    },
    image: {
      type: String,
      // required: [true, "Image is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [10, "Title must be at least 10 characters long"],
    },
    tags: {
      type: [String],
      required: [true, "At least 1 tag is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [20, "Description must be at least 50 characters long"],
      maxlength: [100, "Description must be at least 100 characters long"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [100, "Content must be at least 100 characters long"],
    },
  },
  { timestamps: true }
);

const Blog =
  (mongoose.models.Blog as mongoose.Model<IBlog>) ||
  mongoose.model<IBlog>("Blog", BlogModel);

export default Blog;
