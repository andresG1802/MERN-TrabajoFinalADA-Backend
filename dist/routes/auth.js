"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_campos_1 = require("../middlewares/validar-campos");
const express_validator_1 = require("express-validator");
const login_1 = require("../controllers/login");
const router = (0, express_1.Router)();
router.post('/login', [
    //Ten cuidado con los espacios en los strings
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], login_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map