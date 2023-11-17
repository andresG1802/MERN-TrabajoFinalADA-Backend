"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalles_pedidos_1 = require("../controllers/detalles_pedidos");
const express_validator_1 = require("express-validator");
const db_validator_1 = require("../helpers/db-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', detalles_pedidos_1.getDetallesPedidos);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeDetallesPedidoPorId)
], detalles_pedidos_1.getDetallesPedido);
router.post('/', validar_campos_1.validarCampos, detalles_pedidos_1.postDetallesPedido);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeDetallesPedidoPorId),
    validar_campos_1.validarCampos
], detalles_pedidos_1.putDetallesPedido);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existeDetallesPedidoPorId),
    validar_campos_1.validarCampos
], detalles_pedidos_1.deleteDetallesPedido);
exports.default = router;
//# sourceMappingURL=detalles_pedidos.js.map