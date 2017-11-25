import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatDialogModule } from '@angular/material';
import { PricePipe } from '../custom/price.pipe';
import { PricefilterPipe } from '../custom/pricefilter.pipe';
import { HoverDirective } from '../directive/hover.directive';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    PricePipe,
    PricefilterPipe,
    HoverDirective
  ],
  declarations: [PricePipe, PricefilterPipe, HoverDirective]
})
export class SharedModule { }
