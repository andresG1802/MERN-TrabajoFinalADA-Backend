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
exports.deletePedido = exports.putPedido = exports.postPedido = exports.getPedido = exports.getPedidos = void 0;
const pedidos_1 = __importDefault(require("../models/pedidos"));
const getPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pedidos = yield pedidos_1.default.findAll();
    res.json({ pedidos });
});
exports.getPedidos = getPedidos;
const getPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pedido = yield pedidos_1.default.findByPk(id);
    if (pedido) {
        res.json(pedido);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getPedido = getPedido;
const postPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const pedido = pedidos_1.default.build(body);
        yield pedido.save();
        res.json(pedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postPedido = postPedido;
const putPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pedido = yield pedidos_1.default.findByPk(id);
        if (!pedido) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield pedido.update(body);
        res.json(pedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPedido = putPedido;
const deletePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pedido = yield pedidos_1.default.findByPk(id);
    if (!pedido) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield pedido.update({ estado: false });
    // await usuario.destroy();
    res.json(pedido);
});
exports.deletePedido = deletePedido;
//# sourceMappingURL=pedidos.js.map