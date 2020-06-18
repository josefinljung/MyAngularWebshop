import { Movie } from 'src/app/models/Movie';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IMovie } from './IMovie';

export class MockMovieService implements IMovie {

  movies = new Subject<Movie[]>();

  getMovies() {
    this.movies.next(
      [{ Name: 'Star Wars 1', ImageUrl: 'www.google.se', Year: '2000', Price: 100, Id: 10, Description: 'blababla'},
      { Name: 'Star Wars w', ImageUrl: 'www.google.se', Year: '2000', Price: 100, Id: 10, Description: 'blababla'},
      ]
    );
  }
}
