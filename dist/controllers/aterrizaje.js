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
exports.postAterrizaje = void 0;
const aterrizaje_1 = __importDefault(require("../models/aterrizaje"));
const postAterrizaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { origen, destino } = req.body;
    const aterrizajeOrigen = yield aterrizaje_1.default.findAll({
        where: {
            nombre_ciudad: origen,
        },
    });
    const aterrizajeDestino = yield aterrizaje_1.default.findAll({
        where: {
            nombre_ciudad: destino,
        },
    });
    if (aterrizajeOrigen && aterrizajeDestino) {
        res.json({
            partida: aterrizajeOrigen,
            llegada: aterrizajeDestino,
        });
    }
    else {
        res.status(404).json({
            msg: `No existen aterrizajes con el origen: ${origen} o destino: ${destino}`,
        });
    }
});
exports.postAterrizaje = postAterrizaje;
//# sourceMappingURL=aterrizaje.js.map