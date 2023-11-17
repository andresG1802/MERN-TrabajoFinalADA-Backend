"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_campos_1 = require("../middlewares/validar-campos");
const express_validator_1 = require("express-validator");
const login_1 = require("../controllers/login");
const router = (0, express_1.Router)();
router.post('/', [
    //Ten cuidado con los espacios en los strings
    (0, express_validator_1.check)('correo_electronico', 'El correo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], login_1.login);
exports.default = router;
//# sourceMappingURL=login.js.map