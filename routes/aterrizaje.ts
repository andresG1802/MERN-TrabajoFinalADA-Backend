import { Router } from "express";
import { postAterrizaje } from "../controllers/aterrizaje";

const router = Router();

router.post('/',postAterrizaje);


export default router;