import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from '../main-page/main-page.component';


const routes: Routes = [
    {
      path: '', component: DashboardComponent, children: [
        { path: '', redirectTo: '/main-page', pathMatch: 'full' },
        { path: 'main-page', component: MainPageComponent },
      ]
    }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutes {


   }