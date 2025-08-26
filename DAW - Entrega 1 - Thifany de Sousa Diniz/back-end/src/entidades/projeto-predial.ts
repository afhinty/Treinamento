import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Arquiteto from "./arquiteto";
import Contrato from "./contrato";
export enum Categoria { EXTENSÃO = "Extensão", IC = "Iniciação Científica", TCC = "TCC" };
export enum Resultado { ARTIGO = "artigo", DESENVOLVIMENTO = "desenvolvimento", MONOGRAFIA =
"monografia" };
@Entity()
export default class ProjetoPredial extends BaseEntity {
 @PrimaryGeneratedColumn()
 id: number;
 @Column()
 título: string;
@Column({ type: "enum", enum: Categoria })
 categoria: Categoria;
 @Column()
 área_atuação: string;
 @Column({ type: "date" })
 data_início: Date;
 @Column()
 descrição: string;
 @Column()
 concorrendo_bolsa: boolean;
 @Column({ type: "enum", enum: Resultado })
 resultado: Resultado;
 @ManyToOne(() => Arquiteto, (arquiteto) => arquiteto.projeto-predials, { onDelete: "CASCADE" })
 arquiteto: Arquiteto;
 @OneToMany(() => Contrato, (contrato) => contrato.projeto-predial)
 contratos: Contrato[];
}
