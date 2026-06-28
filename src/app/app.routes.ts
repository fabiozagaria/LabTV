import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Catalogo } from './components/catalogo/catalogo';
import { MovieDetail } from './components/movie-detail/movie-detail';
import { Ricerca } from './components/ricerca/ricerca';
import { Contatti } from './components/contatti/contatti';
import { Login } from './components/login/login';

export const routes: Routes = [
  {
    path: '', 
    component: HomePage,
    title: 'Home | LabTV'
  },
  {
    path: 'catalogo',
    component: Catalogo,
    title: 'Catalogo | LabTV'
  },
  {
    path: 'movie/:id',
    component: MovieDetail,
    title: 'Dettaglio Film | LabTV'
  },
  {
    path: 'ricerca',
    component: Ricerca,
    title: 'Ricerca Film | LabTV'
  },
  {
    path: 'contatti',
    component: Contatti,
    title: 'Contatti | LabTV'
  },
  {
    path: 'login',
    component: Login,
    title: 'Accedi | LabTV'
  }
];
