"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetallesPedido = exports.putDetallesPedido = exports.postDetallesPedido = exports.getDetallesPedido = exports.getDetallesPedidos = void 0;
const detalles_pedido_1 = __importDefault(require("../models/detalles_pedido"));
const getDetallesPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detalles_pedidos = yield detalles_pedido_1.default.findAll();
    res.json({ detalles_pedidos });
});
exports.getDetallesPedidos = getDetallesPedidos;
const getDetallesPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detalles_pedido = yield detalles_pedido_1.default.findByPk(id);
    if (detalles_pedido) {
        res.json(detalles_pedido);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getDetallesPedido = getDetallesPedido;
const postDetallesPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const detalles_pedido = detalles_pedido_1.default.build(body);
        yield detalles_pedido.save();
        res.json(detalles_pedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postDetallesPedido = postDetallesPedido;
const putDetallesPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const detalles_pedido = yield detalles_pedido_1.default.findByPk(id);
        if (!detalles_pedido) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield detalles_pedido.update(body);
        res.json(detalles_pedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putDetallesPedido = putDetallesPedido;
const deleteDetallesPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detalles_pedido = yield detalles_pedido_1.default.findByPk(id);
    if (!detalles_pedido) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield detalles_pedido.update({ estado: false });
    // await usuario.destroy();
    res.json(detalles_pedido);
});
exports.deleteDetallesPedido = deleteDetallesPedido;
//# sourceMappingURL=detalles_pedidos.js.map