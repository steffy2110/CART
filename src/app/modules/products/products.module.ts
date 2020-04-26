import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsListComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        
    ],
    providers: [],
    entryComponents: [],
    exports: [],
})
export class ProductsModule {}