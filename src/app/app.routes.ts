import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieService } from './services/movie.service';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { LoginComponent } from './components/pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'movies',
        component:MoviesComponent,
        canActivate: [authGuard]
    },
    {
        path:'login',
        component:LoginComponent
    }
];


