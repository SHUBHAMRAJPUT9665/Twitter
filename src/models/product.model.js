import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  image: {
    type: String,
  },
  productname: {
    type: String,
  },
  bgcolor: {
    type: String,
  },
  panelcolor: {
    type: String,
  },
  textcolor: {
    type: String,
  },
});

export const Product = mongoose.model("Product", productSchema);
