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
// Importa el modelo de Sequelize para las aristas
const arista_1 = __importDefault(require("../models/arista"));
// Función para encontrar la distancia más corta entre dos nodos usando el algoritmo de Dijkstra
const dijkstra = (origen, destino) => __awaiter(void 0, void 0, void 0, function* () {
    // Conjunto para almacenar todos los nodos disponibles
    const nodos = new Set();
    // Objeto para almacenar las distancias desde el nodo de origen a todos los demás nodos
    const distancias = {};
    // Conjunto para rastrear los nodos ya visitados
    const visitados = new Set();
    // Obtener todas las aristas disponibles desde Sequelize
    const aristas = yield arista_1.default.findAll();
    // Agregar los nodos de origen y destino al conjunto de nodos
    nodos.add(origen);
    nodos.add(destino);
    // Agregar los nodos de las aristas al conjunto de nodos
    aristas.forEach((arista) => {
        nodos.add(arista.getDataValue('nodo_origen'));
        nodos.add(arista.getDataValue('nodo_destino'));
    });
    // Inicializar distancias con infinito y establecer la distancia de origen a sí mismo como 0
    nodos.forEach((nodo) => {
        //Inifinity : cualquier valor
        distancias[nodo] = Infinity;
    });
    distancias[origen] = 0;
    // Mientras haya nodos sin visitar
    while (visitados.size < nodos.size) {
        // Obtener el nodo actual con la menor distancia
        const nodoActual = obtenerNodoConMenorDistancia(distancias, visitados);
        visitados.add(nodoActual);
        // Obtener aristas conectadas al nodo actual desde Sequelize
        const aristasVecinas = yield arista_1.default.findAll({
            where: {
                nodo_origen: nodoActual,
            },
        });
        // Recorrer las aristas vecinas
        for (const arista of aristasVecinas) {
            const nodoVecino = arista.getDataValue('nodo_destino');
            const pesoTotal = distancias[nodoActual] + arista.getDataValue('peso');
            // Actualizar la distancia si se encuentra un camino más corto
            if (pesoTotal < distancias[nodoVecino]) {
                distancias[nodoVecino] = pesoTotal;
            }
        }
    }
    // Devolver la distancia desde el origen hasta el destino
    return distancias[destino];
});
exports.dijkstra = dijkstra;
// Función para obtener el nodo con la menor distancia no visitada
function obtenerNodoConMenorDistancia(distancias, visitados) {
    // Filtrar nodos no visitados y reducir para obtener el nodo con la menor distancia
    return [...Object.keys(distancias)]
        .filter((nodo) => !visitados.has(nodo))
        .reduce((a, b) => (distancias[a] < distancias[b] ? a : b));
}
//# sourceMappingURL=dijkstra.js.map