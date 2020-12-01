import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { GalleryComponent } from './comps/gallery/gallery.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { AboutTheStoreComponent } from './comps/about-the-store/about-the-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AllAplictionComponent } from './comps/all-apliction/all-apliction.component';
import { DetailsComponent } from './comps/details/details.component';
import { SaleComponent } from './comps/sale/sale.component';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './comps/registration/registration.component';
import { ShoppingCartComponent } from './comps/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { BranchesComponent } from './comps/branches/branches.component';
import { HatsComponent } from './comps/Products/hats/hats.component';
import { MovieComponent } from './comps/Products/movie/movie.component';
import { PinsComponent } from './comps/Products/pins/pins.component';
import { RainCoverComponent } from './comps/Products/rain-cover/rain-cover.component';
import { BoxForHatComponent } from './comps/Products/box-for-hat/box-for-hat.component';
import { BrushesComponent } from './comps/Products/brushes/brushes.component';
import { BestsellerComponent } from './comps/bestseller/bestseller.component';
import { RecommendationsComponent } from './comps/recommendations/recommendations.component';
import { CartComponent } from './comps/cart/cart.component';
import { ShippingComponent } from './comps/shipping/shipping.component';
import { VerticalToolbarComponent } from './comps/vertical-toolbar/vertical-toolbar.component';
import { AdminComponent } from './comps/admin/admin.component';
import { DetailsPinsComponent } from './comps/details-pins/details-pins.component';
import { DetailsMovieComponent } from './comps/details-movie/details-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutTheStoreComponent,
    AllAplictionComponent,
    DetailsComponent,
    SaleComponent,
    LoginComponent,
    RegistrationComponent,
    ShoppingCartComponent,
    BranchesComponent,
    HatsComponent,
    MovieComponent,
    PinsComponent,
    RainCoverComponent,
    BoxForHatComponent,
    BrushesComponent,
    BestsellerComponent,
    RecommendationsComponent,
    CartComponent,
    ShippingComponent,
    VerticalToolbarComponent,
    AdminComponent,
    DetailsPinsComponent,
    DetailsMovieComponent,
    
    // HttpClientModule
    

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
