import { Perfil } from "../entidades/usuário";
export default function verificarPerfilArquiteto(request, response, next) {
if (request.perfil === Perfil.ARQUITETO) return next();
else return response.status(401).json({ erro: "Acesso não autorizado." });
};
