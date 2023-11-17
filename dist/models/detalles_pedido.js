"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const pedidos_1 = __importDefault(require("./pedidos"));
const productos_1 = __importDefault(require("./productos"));
const Detalles_pedido = connection_1.default.define('detalles_pedido', {
    detalle_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pedido_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: pedidos_1.default,
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
    precio_unitario: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2)
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'detalles_pedido',
    timestamps: false
});
exports.default = Detalles_pedido;
//# sourceMappingURL=detalles_pedido.js.map