import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movieService/movie.service';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private service: MovieService,
    private cartService: CartService,
  ) { }

  addToCart(m){
    this.cartService.addToCart(m);
    window.alert('Your movie of choice has been added to the cart!');
    // window alert makes my e2e test fail.
  }

  ngOnInit(): void {
    this.service.movies.subscribe((data: Movie[]) => {
      this.movies = data;
    });

    this.service.getMovies();
  }
}
