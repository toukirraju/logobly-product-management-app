const express = require("express");
const runValidation = require("../validators");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const upload = require("../middlewares/uploadFile");
const { validateProduct } = require("../validators/product");

const productRoute = express.Router();

// POST -> /api/products -> create product
productRoute.post(
  "/",
  upload.single("image"),
  validateProduct,
  runValidation,
  isLoggedIn,
  isAdmin,
  createProduct
);

// GET -> /api/products -> GET all products
productRoute.get("/", getProducts);

// PATCAH -> /api/products/:slug -> update single product
productRoute.patch("/:slug", isLoggedIn, isAdmin, updateProduct);

// DELETE -> /api/products/:slug -> delete single product
productRoute.delete("/:slug", isLoggedIn, isAdmin, deleteProduct);

module.exports = productRoute;
