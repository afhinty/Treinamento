"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var verificar_token_1 = __importDefault(require("../middlewares/verificar-token"));
var verificar_perfil_arquiteto_1 = __importDefault(require("../middlewares/verificar-perfil-arquiteto"));
var servi_os_arquiteto_1 = __importDefault(require("../servi\u00E7os/servi\u00E7os-arquiteto"));
var RotasArquiteto = (0, express_1.Router)();
exports.default = RotasArquiteto;
RotasArquiteto.post("/", servi_os_arquiteto_1.default.cadastrarArquiteto);
RotasArquiteto.get("/:cpf", verificar_token_1.default, verificar_perfil_arquiteto_1.default, servi_os_arquiteto_1.default.buscarArquiteto);
//# sourceMappingURL=rotas-arquiteto.js.map