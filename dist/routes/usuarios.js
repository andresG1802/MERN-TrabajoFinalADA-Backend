"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const express_validator_1 = require("express-validator");
const db_validator_1 = require("../helpers/db-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
exports.router = (0, express_1.Router)();
exports.router.get('/', usuario_1.getUsuarios);
exports.router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeUsuarioPorId)
], usuario_1.getUsuario);
exports.router.post('/', [
    (0, express_validator_1.check)('correo_electronico', 'Debe de tener un correo').not().isEmpty(),
    (0, express_validator_1.check)('contraseña', 'La contraseña debe de ser mas de 6 letras').isLength({ min: 6 }),
    validar_campos_1.validarCampos
], usuario_1.postUsuario);
exports.router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuario_1.putUsuario);
exports.router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeUsuarioPorId),
    validar_campos_1.validarCampos
], usuario_1.deleteUsuario);
exports.default = exports.router;
//# sourceMappingURL=usuarios.js.map