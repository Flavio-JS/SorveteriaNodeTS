import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/sorvete", PageController.sorvete);
router.get("/milk-shake", PageController.milkShake);
router.get("/sundae", PageController.sundae);
router.get("/picole", PageController.picole);
router.get("/combos", PageController.combos);

router.get("/search", SearchController.search);

export default router;
