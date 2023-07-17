"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const spends_1 = require("../controllers/spends");
const router = (0, express_1.Router)();
router.post("/", spends_1.createSpend);
router.get("/", spends_1.getSpend);
router.get("/:nombre_gasto", spends_1.getSpendByName);
exports.default = router;
