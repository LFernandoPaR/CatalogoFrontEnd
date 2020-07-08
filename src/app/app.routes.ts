import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuario/pages/usuarios/usuarios.component';
const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);