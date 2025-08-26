"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verificarPerfilArquiteto;
var usu_rio_1 = require("../entidades/usu\u00E1rio");
function verificarPerfilArquiteto(request, response, next) {
    if (request.perfil === usu_rio_1.Perfil.ARQUITETO)
        return next();
    else
        return response.status(401).json({ erro: "Acesso não autorizado." });
}
;
//# sourceMappingURL=verificar-perfil-arquiteto.js.map