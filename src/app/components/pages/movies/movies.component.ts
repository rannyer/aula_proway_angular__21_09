import { Component } from '@angular/core';
import { MovieCardComponent } from '../../assets/movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
