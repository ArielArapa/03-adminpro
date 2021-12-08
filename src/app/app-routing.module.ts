import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modulo
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  //path: '/dashboard' PageRouting
  //path: '/auth' AuthRouting

  //Otros ejemplos (no parte del proyecto)
  //path: '/medicos' MedicoRouting
  //path: '/madre' MadreRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
