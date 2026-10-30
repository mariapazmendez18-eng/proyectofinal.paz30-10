import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { AcercaDe } from './pages/acerca-de/acerca-de';
import { Contacto } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path: '',       component: Home},
    {path: 'productos',  component: Productos},
    {path: 'acerca-de',  component: AcercaDe},
    {path: 'contacto',  component: Contacto},
    {path: '**',   component: NotFound}
];
