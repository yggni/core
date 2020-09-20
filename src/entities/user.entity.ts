import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

@Entity({ schema: 'yggni', name: 'user' })
export class User {
    @PrimaryColumn({ generated: 'increment' })
    @ApiHideProperty()
    id: Number;
    @Column()
    @ApiProperty()
    name: String;
}