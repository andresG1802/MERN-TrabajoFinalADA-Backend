"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Aterrizaje = connection_1.default.define('Aterrizaje', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    lugar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    beneficio_ambiental: {
        type: sequelize_1.DataTypes.STRING,
    },
    beneficio_economico: {
        type: sequelize_1.DataTypes.STRING,
    },
    beneficio_social: {
        type: sequelize_1.DataTypes.STRING,
    },
    comentarios: {
        type: sequelize_1.DataTypes.TEXT,
    },
    fecha_aterrizaje: {
        type: sequelize_1.DataTypes.DATE,
    },
    hora_aterrizaje: {
        type: sequelize_1.DataTypes.TIME,
    },
    nombre_ciudad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    viaje_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'aterrizaje',
    timestamps: false,
});
exports.default = Aterrizaje;
//# sourceMappingURL=aterrizaje.js.map