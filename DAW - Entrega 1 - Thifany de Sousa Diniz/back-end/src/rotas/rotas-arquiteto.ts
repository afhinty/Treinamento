import { Router } from "express";
import verificarToken from "../middlewares/verificar-token";
import verificarPerfilArquiteto from "../middlewares/verificar-perfil-arquiteto";
import ServiçosArquiteto from "../serviços/serviços-arquiteto";
const RotasArquiteto = Router();
export default RotasArquiteto;
RotasArquiteto.post("/", ServiçosArquiteto.cadastrarArquiteto);
RotasArquiteto.get("/:cpf", verificarToken, verificarPerfilArquiteto,
 ServiçosArquiteto.buscarArquiteto);
