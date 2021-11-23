const express = require("express");

const {controllerWrapper, validation, authenticate} = require("../../middlewares");
const {joiRegisterSchema, joiLoginSchema} = require("../../models/user");
const {auth: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), controllerWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), controllerWrapper(ctrl.login));

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

router.get("/current", authenticate, controllerWrapper(ctrl.getCurrent));

module.exports = router;
