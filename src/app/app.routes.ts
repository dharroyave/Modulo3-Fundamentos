import { Routes } from '@angular/router';
// 1. importar todos nuestros componentes página
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio' },
  { path: 'admin', component: Admin, title: 'Dashboard', canActivate: [authGuard] },
  { path: 'login', component: Login, title: 'Inicio Sesión' },
  { path: 'products', component: Products, title: 'Productos' },
  { path: 'register', component: Register, title: 'Registro' },
  { path: '**', component: NotFound, title: '404' },
];
