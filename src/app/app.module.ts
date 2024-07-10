import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterTransactionsPipe } from './shared/pipes/filter-transactions.pipe';
import { FormsModule } from '@angular/forms';
import { CustomerSerachNamePipe } from './shared/pipes/customer-serach-name.pipe';
import { AmountFilterPipe } from './shared/pipes/amount-filter.pipe';
import { GraphComponent } from './components/graph/graph.component';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FilterTransactionsPipe,
    CustomerSerachNamePipe,
    AmountFilterPipe,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
