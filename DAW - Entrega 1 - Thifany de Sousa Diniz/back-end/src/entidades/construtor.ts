import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn }
 from "typeorm";
import Usuário from "./usuário";
import Contrato from "./contrato";
export enum Curso { EC = "Engenharia de Computação", SI = "Sistemas de Informação" };
@Entity()
export default class Construtor extends BaseEntity {
@PrimaryGeneratedColumn()
 id: number;
 @Column({ type: "enum", enum: Curso })
 curso: Curso;
 @Column()
 ano_ingresso: number;
 @Column({ type: "date" })
 data_nascimento: Date;
 @Column()
 telefone: string;
 @OneToMany(() => Contrato, (contrato) => contrato.construtor)
 contratos: Contrato[];
 @OneToOne(() => Usuário, usuário => usuário.construtor, { onDelete: "CASCADE" })
 @JoinColumn()
 usuário: Usuário;
}
