import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutTheStoreComponent } from './comps/about-the-store/about-the-store.component';
import { AppComponent } from './app.component';
import { AllAplictionComponent } from './comps/all-apliction/all-apliction.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { GalleryComponent } from './comps/gallery/gallery.component';
import { DetailsComponent } from './comps/details/details.component';
import { SaleComponent } from './comps/sale/sale.component';
import { LoginComponent } from './comps/login/login.component';
import { RegistrationComponent } from './comps/registration/registration.component';
import { ShoppingCartComponent } from './comps/shopping-cart/shopping-cart.component';
import { BranchesComponent } from './comps/branches/branches.component';
import { BoxForHatComponent } from './comps/Products/box-for-hat/box-for-hat.component';
import { BrushesComponent } from './comps/Products/brushes/brushes.component';
import { HatsComponent } from './comps/Products/hats/hats.component';
import { MovieComponent } from './comps/Products/movie/movie.component';
import { PinsComponent } from './comps/Products/pins/pins.component';
import { RainCoverComponent } from './comps/Products/rain-cover/rain-cover.component';
import { BestsellerComponent } from './comps/bestseller/bestseller.component';
import { RecommendationsComponent } from './comps/recommendations/recommendations.component';
import { CartComponent } from './comps/cart/cart.component';
import { ShippingComponent } from './comps/shipping/shipping.component';
import { AdminComponent } from './comps/admin/admin.component';
import { DetailsPinsComponent } from './comps/details-pins/details-pins.component';
import { DetailsMovieComponent } from './comps/details-movie/details-movie.component';
import { PaymentComponent } from './comps/payment/payment.component';



const routes: Routes = [
  { path: '', component:AllAplictionComponent,
  
children:[
  { path:'',component:BestsellerComponent},
  { path:'about',component:AboutTheStoreComponent},
  {path:'contact',component:ContactUsComponent},
  { path: 'detail', component: DetailsComponent },
  {path:'sale',component:SaleComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'BoxForHat', component: BoxForHatComponent },
  { path: 'Brushes', component: BrushesComponent },
  { path: 'Hats', component: HatsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'Recommendations',component:RecommendationsComponent},
  { path: 'Movie', component: MovieComponent },
  { path: 'Pins', component: PinsComponent },
  { path: 'RainCover', component: RainCoverComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'detailsPins', component: DetailsPinsComponent },
  { path: 'detailsMovie', component: DetailsMovieComponent },
  { path: 'payment', component: PaymentComponent }

  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }