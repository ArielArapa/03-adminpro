import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RjxsComponent } from './rjxs/rjxs.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { tema: 'Dashboard' } }, //dashboard
            { path: 'progress', component: ProgressComponent, data: { tema: 'Progress' } }, //dashboard/progress
            { path: 'grafica1', component: Grafica1Component, data: { tema: 'Grafica N°1' } }, //dashboard/grafica1
            { path: 'account-setting', component: AccountSettingsComponent, data: { tema: 'Ajuste de Cuenta' } }, //dashboard/accountSetting
            { path: 'promesas', component: PromesasComponent, data: { tema: 'Promesas' } }, //dashboard/promesas
            { path: 'rxjs', component: RjxsComponent, data: { tema: 'RxJs' } }, //dashboard/Rxjs
        ]
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
