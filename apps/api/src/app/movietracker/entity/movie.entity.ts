import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movie')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false }) title: string;
  @Column({ type: 'date', nullable: true }) watchedOn: Date;
  @Column({ type: 'varchar', nullable: true }) genre: string;
  @Column({ type: 'integer', nullable: true }) rating: number;
}
