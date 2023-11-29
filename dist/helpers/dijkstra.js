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
// Función asincrónica para realizar el algoritmo de Dijkstra
const dijkstra = (origen, destino) => __awaiter(void 0, void 0, void 0, function* () {
    // Conjunto para almacenar todos los nodos en el grafo
    const nodos = new Set();
    // Registro de distancias desde el origen a cada nodo
    const distancias = {};
    // Registro de predecesores en la mejor ruta
    const predecesores = {};
    // Conjunto de nodos visitados
    const visitados = new Set();
    // Obtener todos los nodos disponibles desde Sequelize
    const aristas = yield arista_1.default.findAll();
    aristas.forEach((arista) => {
        nodos.add(arista.getDataValue('nodo_origen'));
        nodos.add(arista.getDataValue('nodo_destino'));
    });
    // Inicializar distancias y predecesores
    nodos.forEach((nodo) => {
        distancias[nodo] = Infinity;
        predecesores[nodo] = null;
    });
    // La distancia desde el origen a sí mismo es 0
    distancias[origen] = 0;
    // Mientras haya nodos sin visitar
    while (visitados.size < nodos.size) {
        // Obtener el nodo no visitado con la menor distancia actual
        const nodoActual = obtenerNodoConMenorDistancia(distancias, visitados);
        // Manejar el caso cuando no hay más nodos disponibles
        if (nodoActual === null) {
            break;
        }
        // Marcar el nodo actual como visitado
        visitados.add(nodoActual);
        // Obtener aristas conectadas al nodo actual desde Sequelize
        const aristasVecinas = yield arista_1.default.findAll({
            where: {
                nodo_origen: nodoActual,
            },
        });
        // Actualizar las distancias y predecesores según las aristas vecinas
        for (const arista of aristasVecinas) {
            const nodoVecino = arista.getDataValue('nodo_destino');
            const pesoTotal = distancias[nodoActual] + arista.getDataValue('peso');
            // Si se encuentra un camino más corto hacia el vecino, actualizar
            if (pesoTotal < distancias[nodoVecino]) {
                distancias[nodoVecino] = pesoTotal;
                predecesores[nodoVecino] = nodoActual;
            }
        }
    }
    // Construir la ruta desde el destino hasta el origen
    const ruta = [];
    let nodo = destino;
    // Reconstruir la ruta retrocediendo desde el destino hasta el origen
    while (nodo !== null) {
        ruta.unshift(nodo);
        // Si hay un predecesor, avanzar al siguiente nodo en la ruta
        if (predecesores[nodo] !== null) {
            nodo = predecesores[nodo];
        }
        else {
            // Salir del bucle si el predecesor es nulo
            break;
        }
    }
    // Devolver el resultado con la distancia y la ruta
    return {
        distancia: distancias[destino],
        ruta: ruta,
    };
});
exports.dijkstra = dijkstra;
// Función para obtener el nodo no visitado con la menor distancia
function obtenerNodoConMenorDistancia(distancias, visitados) {
    let nodoConMinimaDistancia = null;
    let minimaDistancia = Infinity;
    // Iterar sobre todos los nodos y encontrar el de menor distancia no visitado
    for (const nodo in distancias) {
        if (!visitados.has(nodo) && distancias[nodo] < minimaDistancia) {
            nodoConMinimaDistancia = nodo;
            minimaDistancia = distancias[nodo];
        }
    }
    // Devolver el nodo encontrado o null si no hay más nodos no visitados
    return nodoConMinimaDistancia;
}
//# sourceMappingURL=dijkstra.js.map