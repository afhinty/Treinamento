import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Usuário from "./usuário";
import Proposta from "./projeto-predial";
import ProjetoPredial from "./projeto-predial";
export enum Titulação {
  MESTRADO = "mestrado",
  DOUTORADO = "doutorado",
}
@Entity()
export default class Arquiteto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "enum", enum: Titulação })
  titulação: Titulação;
  @Column()
  anos_experiência_empresarial: number;
  @OneToMany(() => ProjetoPredial, (proposta) => proposta.arquiteto)
  propostas: Proposta[];
  @OneToOne(() => Usuário, (usuário) => usuário.arquiteto, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  usuário: Usuário;
}
