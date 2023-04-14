import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { ProductInCartCardComponent } from './components/cards/productInCart/product-in-cart-card/product-in-cart-card.component';
import {MatIconModule} from '@angular/material/icon';
import { ShoppingCartComponent } from './components/shoppingCart/shopping-cart/shopping-cart.component';
import { OrderGeneratedPageComponent } from './pages/order-generated-page/order-generated-page.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { OrderStateComponent } from './components/order-state/order-state.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ProductsTotalPipe } from './pipes/products-total.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent,
    RegisterCustomerComponent,
    ProductsGridComponent,
    ProductCardComponent,
    HeaderComponent,
    ProductInCartCardComponent,
    ShoppingCartComponent,
    OrderGeneratedPageComponent,
    TitlePageComponent,
    ProductsListComponent,
    CustomerInfoComponent,
    OrderStateComponent,
    DashboardComponent,
    CatalogComponent,
    OrdersListComponent,
    ProductsTotalPipe,
    NotFoundComponent,
    EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
