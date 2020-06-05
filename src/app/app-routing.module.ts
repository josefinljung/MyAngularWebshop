import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'products/:id', component: DetailsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
