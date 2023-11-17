import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuario";
import { check } from "express-validator";
import { existeUsuarioPorId } from "../helpers/db-validator";
import { validarCampos } from "../middlewares/validar-campos";

export const router = Router();


router.get('/',getUsuarios);
router.get('/:id',[
    check('id').custom(existeUsuarioPorId)
],getUsuario);
router.post('/',[
    check('correo_electronico','Debe de tener un correo').not().isEmpty(),
    check('contraseña','La contraseña debe de ser mas de 6 letras').isLength({min:6}),
    validarCampos
],postUsuario);
router.put('/:id',[
    check('id').custom(existeUsuarioPorId),
    validarCampos
],putUsuario);
router.delete('/:id',[
    check('id').custom(existeUsuarioPorId),
    validarCampos
],deleteUsuario);


export default router;