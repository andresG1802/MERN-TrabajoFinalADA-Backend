"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidos_1 = require("../controllers/pedidos");
const express_validator_1 = require("express-validator");
const db_validator_1 = require("../helpers/db-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', pedidos_1.getPedidos);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existePedidoPorId)
], pedidos_1.getPedido);
router.post('/', validar_campos_1.validarCampos, pedidos_1.postPedido);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existePedidoPorId),
    validar_campos_1.validarCampos
], pedidos_1.putPedido);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validator_1.existePedidoPorId),
    validar_campos_1.validarCampos
], pedidos_1.deletePedido);
exports.default = router;
//# sourceMappingURL=pedidos.js.map