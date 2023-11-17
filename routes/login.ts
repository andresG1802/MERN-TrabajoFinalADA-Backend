import { Router } from "express";
import { validarCampos } from "../middlewares/validar-campos";
import { check } from "express-validator";
import { login } from "../controllers/login";

const router = Router();

router.post('/',[
    //Ten cuidado con los espacios en los strings
    check('correo_electronico','El correo es obligatorio').not().isEmpty(),
    check('contraseña','La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login);

export default router;