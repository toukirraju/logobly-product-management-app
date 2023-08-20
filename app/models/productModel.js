const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Product Name must be minimum 3 characters"],
      maxlength: [150, "Product Name must be maximum 150 characters"],
    },
    slug: {
      type: String,
      required: [true, "Product slug is required"],
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      minlength: [3, "Product description must be minimum 3 characters"],
    },
    purchasePrice: {
      type: Number,
      required: [true, "Product Purchase Price is required"],
      trim: true,
      validate: {
        validator: (v) => {
          return v > 0;
        },
        message: (props) =>
          `${props.value} is not a valid price! Price must be greater then 0`,
      },
    },
    sellingPrice: {
      type: Number,
      required: [true, "Product selling price is required"],
      trim: true,
      validate: {
        validator: (v) => {
          return v > 0;
        },
        message: (props) =>
          `${props.value} is not a valid price! Price must be greater then 0`,
      },
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      trim: true,
      validate: {
        validator: (v) => {
          return v > 0;
        },
        message: (props) =>
          `${props.value} is not a valid quantity! quantity must be greater then 0`,
      },
    },
    sold: {
      type: Number,
      // required: [true, "Product sold quantity is required"],
      trim: true,
      default: 0,
      // validate: {
      //   validator: (v) => {
      //     return v > 0;
      //   },
      //   message: (props) =>
      //     `${props.value} is not a valid sold quantity! sold quantity must be greater then 0`,
      // },
    },
    image: {
      type: Buffer,
      contentType: String,
      required: [true, "Product image is required"],
    },
    addedDate: {
      type: String,
      required: [true, "Product added date is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
