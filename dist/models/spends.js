"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SpendSchema = new mongoose_1.Schema({
    nombre_consumidor: {
        type: String,
        required: true
    },
    apellido_consumidor: {
        type: String,
        required: true
    },
    nombre_gasto: {
        type: String,
        required: true
    },
    gasto: {
        type: Number,
        required: true
    },
    fecha_gasto: {
        date: { type: Date, default: Date.now },
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    },
});
const Spend = (0, mongoose_1.model)("Spend", SpendSchema);
exports.default = Spend;
