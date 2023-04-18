import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchGPageRoutingModule } from './search-g-routing.module';

import { SearchGPage } from './search-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchGPageRoutingModule
  ],
  declarations: [SearchGPage]
})
export class SearchGPageModule {}
