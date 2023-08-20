const createHttpError = require("http-errors");
const { successResponse } = require("../utils/responseHandler");
const {
  getAllProduct,
  createNewProduct,
  deleteProductBySlug,
  updateProductBySlug,
} = require("../service/productService");

const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      purchasePrice,
      sellingPrice,
      quantity,
      addedDate,
    } = req.body;

    const image = req.file;
    if (!image) {
      throw createHttpError(400, "Image file is required");
    }
    if (image.size > 1024 * 1024 * 2) {
      throw createHttpError(400, "File too large. It must be less than 2 MB");
    }

    const imageBufferString = image.buffer.toString("base64");

    const productData = {
      name,
      description,
      purchasePrice,
      sellingPrice,
      quantity,
      addedDate,
      imageBufferString,
    };

    const product = await createNewProduct(productData);

    return successResponse(res, {
      statusCode: 200,
      message: "product was created successfully",
      payload: product,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    const productData = await getAllProduct(page, limit);

    return successResponse(res, {
      statusCode: 200,
      message: "product fetched successfully",
      payload: {
        products: productData.products,
        pagination: {
          totalPages: Math.ceil(productData.count / limit),
          currentPage: page,
          previousPage: page - 1,
          nextPage: page + 1,
          totalNumberOfProducts: productData.count,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const updateOptions = { new: true, runValidators: true, context: "query" };
    let updates = {};

    const allowedFields = [
      "name",
      "description",
      "purchasePrice",
      "sellingPrice",
      "quantity",
    ];

    for (const key in req.body) {
      if (allowedFields.includes(key)) {
        updates[key] = req.body[key];
      }
    }

    const image = req.file;
    const updatedProduct = await updateProductBySlug(
      slug,
      updates,
      image,
      updateOptions
    );

    return successResponse(res, {
      statusCode: 200,
      message: "Product was updated successfully",
      payload: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    await deleteProductBySlug(slug);

    return successResponse(res, {
      statusCode: 200,
      message: "Product deleted",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
