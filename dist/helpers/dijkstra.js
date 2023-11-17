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
exports.dijkstra = void 0;
const arista_1 = __importDefault(require("../models/arista"));
const dijkstra = (origen, destino) => __awaiter(void 0, void 0, void 0, function* () {
    const nodos = new Set();
    const distancias = {};
    const visitados = new Set();
    // Obtener todos los nodos disponibles
    const aristas = yield arista_1.default.findAll();
    aristas.forEach((arista) => {
        nodos.add(arista.getDataValue('nodo_origen'));
        nodos.add(arista.getDataValue('nodo_destino'));
    });
    // Inicializar distancias
    nodos.forEach((nodo) => {
        distancias[nodo] = Infinity;
    });
    distancias[origen] = 0;
    while (visitados.size < nodos.size) {
        const nodoActual = obtenerNodoConMenorDistancia(distancias, visitados);
        visitados.add(nodoActual);
        // Obtener aristas conectadas al nodo actual desde Sequelize
        const aristasVecinas = yield arista_1.default.findAll({
            where: {
                nodo_origen: nodoActual,
            },
        });
        for (const arista of aristasVecinas) {
            const nodoVecino = arista.getDataValue('nodo_destino');
            const pesoTotal = distancias[nodoActual] + arista.getDataValue('peso');
            if (pesoTotal < distancias[nodoVecino]) {
                distancias[nodoVecino] = pesoTotal;
            }
        }
    }
    return distancias[destino];
});
exports.dijkstra = dijkstra;
function obtenerNodoConMenorDistancia(distancias, visitados) {
    return [...Object.keys(distancias)].filter((nodo) => !visitados.has(nodo)).reduce((a, b) => (distancias[a] < distancias[b] ? a : b));
}
//# sourceMappingURL=dijkstra.js.map