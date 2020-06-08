import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private service: MovieService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((m) => {
      this.id = m.Id;
    });
    this.service.movies.subscribe((data: Movie[]) => {
      this.movie = data.find(e =>
      e.Id === this.id);
      console.log(this.id);
    });

    this.service.getMovies();
  }
}
