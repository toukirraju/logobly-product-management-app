const { body } = require("express-validator");
// product validation
const validateProduct = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product Name is required")
    .isLength({ min: 3, max: 150 })
    .withMessage("Product Name should be at least 3-150 characters long"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 3 })
    .withMessage("Product description should be at least 3 characters long"),
  body("purchasePrice")
    .trim()
    .notEmpty()
    .withMessage("Purchase Price is required")
    .isLength({ min: 0 })
    .withMessage("Purchase Price must be a positive number"),
  body("sellingPrice")
    .trim()
    .notEmpty()
    .withMessage("Selling Price is required")
    .isLength({ min: 0 })
    .withMessage("Selling Price must be a positive number"),

  body("quantity")
    .trim()
    .notEmpty()
    .withMessage("Product quantity  is required")
    .isLength({ min: 0 })
    .withMessage("Product quantity  must be a positive number"),
];

module.exports = { validateProduct };
