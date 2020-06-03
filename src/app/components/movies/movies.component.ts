import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

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
