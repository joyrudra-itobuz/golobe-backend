import express from "express";
import CommonController from "../controllers/common.controller";

const commonController = new CommonController();

const router = express.Router();

router.post("/sign-up", commonController.addEditUser);

router.post("/login", commonController.login);

export default router;
