"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpendByName = exports.getSpend = exports.createSpend = void 0;
const spends_1 = __importDefault(require("../models/spends"));
const createSpend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const spendData = req.body;
    const spend = new spends_1.default(spendData);
    yield spend.save();
    res.json({
        message: "POST Ok",
        spend
    });
});
exports.createSpend = createSpend;
const getSpend = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condition = { state: true };
    const spend = yield spends_1.default.find(condition);
    res.json({
        message: "GET Ok",
        spend
    });
});
exports.getSpend = getSpend;
const getSpendByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_gasto } = req.params;
    const spend = yield spends_1.default.findOne({ nombre_gasto: nombre_gasto });
    res.json({
        spend
    });
});
exports.getSpendByName = getSpendByName;
