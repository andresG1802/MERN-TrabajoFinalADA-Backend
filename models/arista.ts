import { DataTypes } from "sequelize";
import db from '../db/connection';
// Definir el modelo para las aristas
const Arista = db.define('Arista', {
    nodo_origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nodo_destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: 'aristas', // Nombre de la tabla en la base de datos
    timestamps: false
});

export default Arista;