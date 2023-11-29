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
exports.getVuelos = exports.postDijkstra = void 0;
const dijkstra_1 = require("../helpers/dijkstra");
const arista_1 = __importDefault(require("../models/arista"));
const postDijkstra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { origen, destino } = req.body;
    const resultado = yield (0, dijkstra_1.dijkstra)(origen, destino);
    const { distancia, ruta } = resultado;
    try {
        return res.json({ caminoMasCorto: distancia, ruta: ruta });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postDijkstra = postDijkstra;
const getVuelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { seleccion } = req.body;
    const aristas = yield arista_1.default.findAll({
        where: {
            nodo_origen: seleccion
        }
    });
    if (aristas) {
        res.json(aristas);
    }
    else {
        res.status(404).json({
            msg: `No existe una arista ${seleccion}`
        });
    }
});
exports.getVuelos = getVuelos;
//# sourceMappingURL=dijkstra.js.map