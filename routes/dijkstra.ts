import { Router } from "express";
import { getVuelos, postDijkstra } from "../controllers/dijkstra";



const router = Router();

router.post('/', postDijkstra);
router.get('/', getVuelos);
export default router;