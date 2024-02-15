import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    OrderModule,
    CustomerModule,
    ProductsModule,
  ],
})
export class ComponentsModule {}
