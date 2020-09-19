import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('yggni.user')
export class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
}