import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { MovieEntity } from '../src/app/movietracker/entity/movie.entity';

export class SeedMovieRecords1563619128889 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const movies = [
      {
        title: 'The Shawshank Redemption',
        watchedOn: new Date('2016-11-4'),
        genre: 'Drama',
        rating: 4
      },
      {
        title: 'The Godfather',
        watchedOn: new Date('2017-10-2'),
        genre: 'Drama',
        rating: 2
      },
      {
        title: 'The Dark Knight',
        watchedOn: new Date('2018-12-1'),
        genre: 'Drama, Action',
        rating: 3
      },
      {
        title: 'The Godfather: Part II ',
        watchedOn: new Date('2019-2-4'),
        genre: 'Drama',
        rating: 1
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        watchedOn: new Date('2019-4-2'),
        genre: 'Adventure, Drama, Fantasy',
        rating: 5
      },
      {
        title: 'Pulp Fiction',
        watchedOn: new Date('2019-3-27'),
        genre: 'Crime, Drama',
        rating: 3
      }
    ];
    const moviesCreated = await getRepository(MovieEntity).create(movies);
    await getRepository(MovieEntity).save(moviesCreated);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
