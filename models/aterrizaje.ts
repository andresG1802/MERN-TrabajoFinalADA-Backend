import { DataTypes } from "sequelize";
import db from '../db/connection';

const Aterrizaje = db.define('Aterrizaje', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beneficio_ambiental: {
      type: DataTypes.STRING,
    },
    beneficio_economico: {
      type: DataTypes.STRING,
    },
    beneficio_social: {
      type: DataTypes.STRING,
    },
    comentarios: {
      type: DataTypes.TEXT,
    },
    fecha_aterrizaje: {
      type: DataTypes.DATE,
    },
    hora_aterrizaje: {
      type: DataTypes.TIME,
    },
    nombre_ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    viaje_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
}, {
    tableName: 'aterrizaje',
    timestamps: false,
});

export default Aterrizaje;
