import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros'
import { Inicio } from './inicio/inicio'
import { Juego } from './juego/juego'

export const routes: Routes = [
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'inicio', component: Inicio },
    {path: 'juego',component: Juego},

    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '', component: Inicio }

];
