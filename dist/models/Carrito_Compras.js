"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const productos_1 = __importDefault(require("./productos"));
const Carrito_compras = connection_1.default.define('carrito_compras', {
    carrito_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.default,
            key: 'id',
        },
    },
    producto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: productos_1.default,
            key: 'id',
        },
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'detalles_pedido',
    timestamps: false
});
exports.default = Carrito_compras;
//# sourceMappingURL=carrito_compras.js.map