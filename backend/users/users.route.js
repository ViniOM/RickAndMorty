const router = require("express").Router();
const userController = require("./users.controller");
const { validId } = require("../middleware/middleware");

router.get("/", userController.findAllUserController);
router.post("/create", userController.createUserController);
router.get("/find", userController.findByNameUserController)
router.delete("/delete/:id", validId, userController.deleteUserController);

module.exports = router;