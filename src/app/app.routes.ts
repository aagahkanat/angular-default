import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainPageModule } from './main-page/main-page.module';


const routes: Routes = [
    { path: '', loadChildren: () => DashboardModule },
    { path: 'main-page', loadChildren: () => MainPageModule },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
  })
  export class AppRoutesModule { 
  }

