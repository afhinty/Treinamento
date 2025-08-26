import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import Arquiteto from "./arquiteto";
import Construtor from "./construtor";
export enum Perfil {
  ALUNO = "construtor",
  PROFESSOR = "arquiteto",
}
export enum Status {
  PENDENTE = "pendente",
  ATIVO = "ativo",
}
export enum Cores {
  AMARELO = "yellow",
  ANIL = "indigo",
  AZUL = "blue",
  AZUL_PISCINA = "cyan",
  CINZA_ESCURO = "bluegray",
  LARANJA = "orange",
  ROSA = "pink",
  ROXO = "purple",
  VERDE = "green",
  VERDE_AZULADO = "teal",
}
@Entity()
export default class Usuário extends BaseEntity {
  @PrimaryColumn()
  cpf: string;
  @Column({ type: "enum", enum: Perfil })
  perfil: Perfil;
  @Column({ type: "enum", enum: Status, default: Status.PENDENTE })
  status: Status;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  questão: string;
  @Column()
  resposta: string;
  @Column({ type: "enum", enum: Cores })
  cor_tema: string;
  @OneToOne(() => Arquiteto, (arquiteto) => arquiteto.usuário)
  arquiteto: Arquiteto;
  @OneToOne(() => Construtor, (construtor) => construtor.usuário)
  construtor: Construtor;
  @CreateDateColumn()
  data_criação: Date;
}
