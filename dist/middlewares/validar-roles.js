"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tieneRole = exports.esAdminRole = void 0;
const express_1 = require("express");
const esAdminRole = (req = express_1.request, res = express_1.response) => {
    if (!req.usuario) {
        return res.status(500).json({
            msg: "Se quiere verificar el role sin validar el token primero"
        });
    }
    const { rol, nombre } = req.usuario;
    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${nombre} no es administrador - No puede hacer esto`
        });
    }
};
exports.esAdminRole = esAdminRole;
const tieneRole = (...roles) => {
    return (req, res = express_1.response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero'
            });
        }
        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            });
        }
    };
};
exports.tieneRole = tieneRole;
//# sourceMappingURL=validar-roles.js.map