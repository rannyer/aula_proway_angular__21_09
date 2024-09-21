import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../assets/movie-card/movie-card.component';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  movies:Movie[] = []

  constructor(private movieService:MovieService){}
  
  ngOnInit(): void {
    this.getAllMovies();
  }

  
  getAllMovies(){
    this.movieService.getMovies().subscribe(
      {
      next: res => this.movies = res,
      error: err => console.log(err)
      }
    )
  }
}
