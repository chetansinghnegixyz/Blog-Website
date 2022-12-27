import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

router.get('/', UserController.home)
router.get('/blogs',UserController.blogs)
router.get('/register', UserController.register);
router.post('/register', UserController.createUserDoc);
router.get('/login', UserController.login);
router.post('/login', UserController.verifyLogin);
router.get('/logout', UserController.userLogout);
router.get('/ai', UserController.ai);
router.get('/ds', UserController.ds);
router.get('/wd', UserController.wd);
router.get('/dm', UserController.dm);
router.get('/bc', UserController.bc);
router.get('/gd', UserController.gd);

export default router;