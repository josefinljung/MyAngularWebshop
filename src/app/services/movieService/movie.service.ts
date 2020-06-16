import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../models/Movie';
import { Subject } from 'rxjs';
import { IMovie } from './IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IMovie {

  movies = new Subject<Movie[]>();

  constructor(
    private http: HttpClient
    ) { }

  getMovies() {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {

      const moviesFromApi: Movie[] = data.map(movie => {
        const movieObject = new Movie();
        movieObject.Name = movie.name;
        movieObject.ImageUrl = movie.imageUrl;
        movieObject.Year = movie.year;
        movieObject.Price = movie.price;
        movieObject.Id = movie.id;
        movieObject.Description = movie.description;
        return movieObject;
      });


      this.movies.next(moviesFromApi);

    });
  }

}
