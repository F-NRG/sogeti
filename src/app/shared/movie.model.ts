import { Rating } from './rating.model';

export class Movie {
  public Title: string;
  public Year: number;
  public Rated: string;
  public Released: string;
  public Runtime: string;
  public Genre: string;
  public Director: string;
  public Writer: string;
  public Actors: string;
  public Plot: string;
  public Language: string;
  public Country: string;
  public Awards: string;
  public Poster: string;
  public Ratings: [];
  public Metascore: string;
  public imdbRating: string;
  public imdbVotes: string;
  public imdbID: string;
  public Type: string;
  public DVD: string;
  public BoxOffice: string;
  public Production: string;
  public Website: string;
  public Response: string;
constructor(title: string, year: number, rated: string, released: string, runtime: string, genre: string, director: string,
  writer: string, actors: string, plot: string, language: string, country: string, awards: string, poster: string, ratings: [],
  metascore: string, imdbRating: string, imdbVotes: string, imdbID: string, type: string, dvd: string, boxOffice: string,
  production: string, website: string, response: string) {
    this.Title = title;
    this.Year = year;
    this.Rated = rated;
    this.Released = released;
    this.Runtime = runtime;
    this.Genre = genre;
    this.Director = director;
    this.Writer = writer;
    this.Actors = actors;
    this.Plot = plot;
    this.Language = language;
    this.Country = country;
    this.Awards = awards;
    this.Poster = poster;
    this.Ratings = ratings;
    this.Metascore = metascore;
    this.imdbRating = imdbRating;
    this.imdbVotes = imdbVotes;
    this.imdbID = imdbID;
    this.Type = type;
    this.DVD = dvd;
    this.BoxOffice = boxOffice;
    this.Production = production;
    this.Website = website;
    this.Response = response;
  }
}
