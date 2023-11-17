"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const express_validator_1 = require("express-validator");
const db_validator_1 = require("../helpers/db-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
exports.router = (0, express_1.Router)();
exports.router.get('/', producto_1.getProductos);
exports.router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeProductoPorId)
], producto_1.getProducto);
exports.router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], producto_1.postProducto);
exports.router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeProductoPorId),
    validar_campos_1.validarCampos
], producto_1.putProducto);
exports.router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeProductoPorId),
    validar_campos_1.validarCampos
], producto_1.deleteProducto);
exports.default = exports.router;
//# sourceMappingURL=productos.js.map