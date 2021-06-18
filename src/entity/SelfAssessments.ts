import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';
import { MinLength, MaxLength, IsNotEmpty, IsString } from 'class-validator';
@Entity()
@Unique(['name'])
@Unique(['id'])
export class SelfAssessment {
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