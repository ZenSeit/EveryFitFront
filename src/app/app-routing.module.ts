import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OrderGeneratedPageComponent } from './pages/order-generated-page/order-generated-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthFireGuard } from './guards/auth-fire.guard';
import { CatalogComponent } from './components/catalog/catalog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component: HomePageComponent,
    children:[
      { 
        path: '',
        component: CatalogComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthFireGuard]
      }
    ]
  },
  {
    path:"login",
    component: LoginPageComponent,
  },
  {
    path:"ordergenerated",
    component: OrderGeneratedPageComponent
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
