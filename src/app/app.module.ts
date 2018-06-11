import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './content/products/products.component';
import { ProductComponent } from './content/Products/product/product.component';
import { ProductDetailsComponent } from './content/product-details/product-details.component';
import { productsServise } from './content/product.services';

const appRoutes: Routes = [
  {
    path: ' ',
    component: AppComponent,
  },
  {
    path: 'product',
    component: ProductDetailsComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    BannerComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule
  ],
  providers: [productsServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
