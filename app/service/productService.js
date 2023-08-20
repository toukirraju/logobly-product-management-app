const slugify = require("slugify");
const Product = require("../models/productModel");
const createHttpError = require("http-errors");

const createNewProduct = async (productData) => {
  const {
    name,
    description,
    purchasePrice,
    sellingPrice,
    quantity,
    addedDate,
    imageBufferString,
  } = productData;

  const productExists = await Product.exists({ name: name });

  if (productExists) {
    throw createHttpError(409, "Product with this name already exists.");
  }

  const product = await Product.create({
    name: name,
    slug: slugify(name),
    description: description,
    purchasePrice: purchasePrice,
    sellingPrice: sellingPrice,
    quantity: quantity,
    addedDate: addedDate,
    image: imageBufferString,
  });
  return product;
};

const getAllProduct = async (page = 1, limit = 4) => {
  const products = await Product.find({})
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });

  if (!products) {
    throw createHttpError(404, "Product not found!");
  }

  const count = await Product.find({}).countDocuments();

  return { products, count };
};

const updateProductBySlug = async (slug, updates, updateOptions) => {
  if (updates.name) {
    updates.slug = slugify(updates.name);
  }

  // if (image) {
  //   if (image.size > 1024 * 1024 * 2) {
  //     throw new Error("File too large. It must be less then 2mb");
  //   }
  //   updates.image = image.buffer.toString("base64");
  // }

  const updatedProduct = await Product.findOneAndUpdate(
    { slug },
    updates,
    updateOptions
  );
  if (!updatedProduct) {
    throw createHttpError(404, "User with this Id does not exist");
  }
  return updatedProduct;
};

const deleteProductBySlug = async (slug) => {
  const product = await Product.findOneAndDelete({ slug });

  if (!product) {
    throw createHttpError(404, "Product not found!");
  }

  return product;
};

module.exports = {
  createNewProduct,
  getAllProduct,
  deleteProductBySlug,
  updateProductBySlug,
};
