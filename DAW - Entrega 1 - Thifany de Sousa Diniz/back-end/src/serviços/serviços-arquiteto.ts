import md5 from "md5";
import { getManager } from "typeorm";
import Usuário, { Status } from "../entidades/usuário";
import Arquiteto from "../entidades/arquiteto";
import ServiçosUsuário from "./serviços-usuário";
export default class ServiçosArquiteto {
  constructor() {}
  static async cadastrarArquiteto(request, response) {
    try {
      const { usuário_info, titulação, anos_experiência_empresarial } =
        request.body;
      const { usuário, token } = await ServiçosUsuário.cadastrarUsuário(
        usuário_info
      );
      const entityManager = getManager();
      await entityManager.transaction(async (transactionManager) => {
        await transactionManager.save(usuário);
        const arquiteto = Arquiteto.create({
          usuário,
          titulação,
          anos_experiência_empresarial,
        });
        await transactionManager.save(arquiteto);
        await transactionManager.update(Usuário, usuário.cpf, {
          status: Status.ATIVO,
        });
        return response.json({ status: Status.ATIVO, token });
      });
    } catch (error) {
      return response.status(500).json({ erro: error });
    }
  }
  static async buscarArquiteto(request, response) {
    try {
      const cpf_encriptado = md5(request.params.cpf);
      const arquiteto = await Arquiteto.findOne({
        where: { usuário: cpf_encriptado },
        relations: ["usuário"],
      });
      if (!arquiteto)
        return response.status(404).json({ erro: "Arquiteto não encontrado." });
      return response.json({
        nome: arquiteto.usuário.nome,
        email: arquiteto.usuário.email,
        titulação: arquiteto.titulação,
        anos_experiência_empresarial: arquiteto.anos_experiência_empresarial,
      });
    } catch (error) {
      return response.status(500).json({ erro: "Erro BD : buscarArquiteto" });
    }
  }
}
