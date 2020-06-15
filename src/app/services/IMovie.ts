import { Subject, throwError } from 'rxjs';
import { Movie } from '../models/Movie';


export interface IMovie {
  movies: Subject<Movie[]>;
  getMovies(): void;
  }
