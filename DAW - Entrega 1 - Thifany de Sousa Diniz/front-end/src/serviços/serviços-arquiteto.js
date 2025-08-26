import servidor from "./servidor";
export function serviçoCadastrarArquiteto(arquiteto)
 { return servidor.post("//arquitetos", arquiteto); };
export function serviçoBuscarArquiteto(cpf) { return servidor.get(`/arquitetos/${cpf}`); };
