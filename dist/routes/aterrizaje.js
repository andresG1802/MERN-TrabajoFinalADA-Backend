"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aterrizaje_1 = require("../controllers/aterrizaje");
const router = (0, express_1.Router)();
router.post('/', aterrizaje_1.postAterrizaje);
exports.default = router;
//# sourceMappingURL=aterrizaje.js.map