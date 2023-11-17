"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
// Definir el modelo para las aristas
const Arista = connection_1.default.define('Arista', {
    nodo_origen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nodo_destino: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    peso: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'aristas',
    timestamps: false
});
exports.default = Arista;
//# sourceMappingURL=arista.js.map