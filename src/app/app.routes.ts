import { Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ListagemAssinantesComponent} from "./pages/assinantes/listagem-assinantes/listagem-assinantes.component";
import {DetalharAssinanteComponent} from "./pages/assinantes/detalhar-assinante/detalhar-assinante.component";

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'listagem-assinantes', component: ListagemAssinantesComponent },
  { path: 'detalhar-assinante/:id', component: DetalharAssinanteComponent },
];
