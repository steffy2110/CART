import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './modules/error/error.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LoginComponent } from './modules/login/login.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { NoPageFoundComponent } from './modules/no-page-found/no-page-found.component';
import { SuccessComponent } from './modules/success/success.component';
import { HeaderComponent } from './modules/header/header.component';
import { ProductsModule } from './modules/products/products.module';

// material modules

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const materialModules = [
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    NoPageFoundComponent,
    SuccessComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModules,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
