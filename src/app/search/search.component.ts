import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movie: Movie;
  plot = 'short';
  actors = [];
  genres = [];
  writers = [];
  response: boolean;
  constructor(private movieService: MovieService ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const plot = form.value.plot === true ? 'plot=full' : 'plot=short';
    this.movieService.getMovie(form.value.search, plot)
    .subscribe(
      (data: Movie) => {
        this.movie = data;
        if (this.movie.Response === 'True') {
          this.response = true;
          this.actors = this.movie.Actors.split(',');
          this.genres = this.movie.Genre.split(',');
          this.writers = this.movie.Writer.split(',');
        } else if (this.movie.Response === 'False') {
          this.response = false;
        }
      },
      (error) => console.log(error)
      );
  }
}
