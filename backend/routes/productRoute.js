const express = require("express");
const multiparty =require("connect-multiparty");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deletProdcut,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const {
  isAuthenticatedUser,
  authroizeRoles,
} = require("../middleware/authentication");

const router = express.Router();
const path =require("path")
const getImage = multiparty({uploadDir:path.join(__dirname,"images")})

router.route("/products").get(getAllProducts); // we use our controller.

router
  .route("/admin/product/new")
  .post( isAuthenticatedUser,getImage,createProduct); // we use this to create new Product  authroizeRoles("admin"),

// delet, update, get-------------------
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authroizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authroizeRoles("admin"), deletProdcut);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;