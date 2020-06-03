import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../models/Movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  getMovies() {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {
      console.log(data.products);

      const moviesFromApi: Movie[] = data.products.map(movie => {
        const movieObject = new Movie();
        movieObject.Name = movie.name;
        movieObject.ImageUrl = movie.imageUrl;
        movieObject.Year = movie.year;
        return movieObject;
      });

      this.movies.next(moviesFromApi);

    });
  }
}
