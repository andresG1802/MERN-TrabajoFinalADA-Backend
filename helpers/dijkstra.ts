import Arista from "../models/arista";

export const dijkstra= async(origen: string, destino: string): Promise<number>=>{
    const nodos = new Set<string>();
    const distancias: Record<string, number> = {};
    const visitados = new Set<string>();
  
    // Obtener todos los nodos disponibles
    const aristas = await Arista.findAll();
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
      const aristasVecinas = await Arista.findAll({
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
  }
  
function obtenerNodoConMenorDistancia(distancias: Record<string, number>, visitados: Set<string>): string {
    return [...Object.keys(distancias)].filter((nodo) => !visitados.has(nodo)).reduce((a, b) => (distancias[a] < distancias[b] ? a : b));
}

