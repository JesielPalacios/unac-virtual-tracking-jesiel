import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity()
@Unique(['name'])
@Unique(['id'])
export class Selfassessments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(5)
  @MaxLength(45)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  nota: number;
}