// user.entity.ts
import 'reflect-metadata'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  name?: string;

  @Column('varchar')
  email!: string;

  @Column('varchar')
  password!: string;
}