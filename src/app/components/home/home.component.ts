import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movieService/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.movies.subscribe((m: Movie[]) => {
      console.log(m);
      this.movies = m;
    });

    this.service.getMovies();
  }

}
