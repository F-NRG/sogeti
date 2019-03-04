import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredMovies = ['the rocketeer', 'pokemon', 'dawn of the dead', 'the social network', 'the dark knight'];
  featuredMovie = this.featuredMovies[Math.floor(Math.random() * this.featuredMovies.length)];
  plot = 'plot=full';
  movieList = [];
  subscription: Subscription;
  // movie1;
  // movie2;
  // movieListLength: number;

  constructor( private movieService: MovieService) {
  }

  ngOnInit() {

    // this.movieListLength = this.featuredMovies.length;
    // this.movie1 = this.featuredMovies[Math.floor(Math.random() * this.movieListLength)];
    // if (this.movieListLength > 1) {
    //     do {
    //       this.movie2 = this.featuredMovies[Math.floor(Math.random() * this.movieListLength)];
    //     } while(this.movie1 === this.movie2);

    this.subscription = this.movieService.getFeatured(this.featuredMovies[1], this.featuredMovies[2], this.plot)
      .subscribe(
        (movieList) => {
          this.movieList = movieList;
        },
        (error) => console.log(error)
      );
  }
}


