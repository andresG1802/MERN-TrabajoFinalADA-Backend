"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dijkstra_1 = require("../controllers/dijkstra");
const router = (0, express_1.Router)();
router.post('/', dijkstra_1.postDijkstra);
router.get('/', dijkstra_1.getVuelos);
exports.default = router;
//# sourceMappingURL=dijkstra.js.map