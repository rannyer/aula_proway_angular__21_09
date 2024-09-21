import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://localhost:3000/movie'

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url);
  }
  getMovieById(id:string):Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.url}/${id}`)
  }
  deleteMovie(id:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }
  postMovie(movie:Movie):Observable<Movie>{
    return this.httpClient.post<Movie>(this.url, movie);
  }

}
