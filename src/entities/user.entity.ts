import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'yggni', name: 'user' })
export class User {
    @PrimaryColumn({ generated: 'increment' })
    id: Number;
    @Column()
    name: String;
}