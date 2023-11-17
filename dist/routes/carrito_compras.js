"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const carrito_compras_1 = require("../controllers/carrito_compras");
const express_validator_1 = require("express-validator");
const db_validator_1 = require("../helpers/db-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
exports.router = (0, express_1.Router)();
exports.router.get('/', carrito_compras_1.getCarritosCompras);
exports.router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeCarritoComprasPorId)
], carrito_compras_1.getCarritoCompras);
exports.router.post('/', validar_campos_1.validarCampos, carrito_compras_1.postCarritoCompras);
exports.router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeCarritoComprasPorId),
    validar_campos_1.validarCampos
], carrito_compras_1.putCarritoCompras);
exports.router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeCarritoComprasPorId),
    validar_campos_1.validarCampos
], carrito_compras_1.deleteCarritoCompras);
exports.default = exports.router;
//# sourceMappingURL=carrito_compras.js.map