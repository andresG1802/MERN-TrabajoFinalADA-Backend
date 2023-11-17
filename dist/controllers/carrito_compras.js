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
exports.deleteCarritoCompras = exports.putCarritoCompras = exports.postCarritoCompras = exports.getCarritoCompras = exports.getCarritosCompras = void 0;
const carrito_compras_1 = __importDefault(require("../models/carrito_compras"));
const getCarritosCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carritos_compras = yield carrito_compras_1.default.findAll();
    res.json({ carritos_compras });
});
exports.getCarritosCompras = getCarritosCompras;
const getCarritoCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carrito_compras = yield carrito_compras_1.default.findByPk(id);
    if (carrito_compras) {
        res.json(carrito_compras);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getCarritoCompras = getCarritoCompras;
const postCarritoCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const carrito_compras = carrito_compras_1.default.build(body);
        yield carrito_compras.save();
        res.json(carrito_compras);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postCarritoCompras = postCarritoCompras;
const putCarritoCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const carrito_compras = yield carrito_compras_1.default.findByPk(id);
        if (!carrito_compras) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield carrito_compras.update(body);
        res.json(carrito_compras);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCarritoCompras = putCarritoCompras;
const deleteCarritoCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carrito_compras = yield carrito_compras_1.default.findByPk(id);
    if (!carrito_compras) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield carrito_compras.update({ estado: false });
    // await usuario.destroy();
    res.json(carrito_compras);
});
exports.deleteCarritoCompras = deleteCarritoCompras;
//# sourceMappingURL=carrito_compras.js.map