// Importa el modelo de Sequelize para las aristas
import Arista from "../models/arista";

// Función para encontrar la distancia más corta entre dos nodos usando el algoritmo de Dijkstra
export const dijkstra = async (origen: string, destino: string): Promise<number> => {
  // Conjunto para almacenar todos los nodos disponibles
  const nodos = new Set<string>();
  
  // Objeto para almacenar las distancias desde el nodo de origen a todos los demás nodos
  const distancias: Record<string, number> = {};
  
  // Conjunto para rastrear los nodos ya visitados
  const visitados = new Set<string>();

  // Obtener todas las aristas disponibles desde Sequelize
  const aristas = await Arista.findAll();
  
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
    const aristasVecinas = await Arista.findAll({
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
};

// Función para obtener el nodo con la menor distancia no visitada
function obtenerNodoConMenorDistancia(distancias: Record<string, number>, visitados: Set<string>): string {
  // Filtrar nodos no visitados y reducir para obtener el nodo con la menor distancia
  return [...Object.keys(distancias)]
    .filter((nodo) => !visitados.has(nodo))
    .reduce((a, b) => (distancias[a] < distancias[b] ? a : b));
}

