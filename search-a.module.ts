import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAPageRoutingModule } from './search-a-routing.module';

import { SearchAPage } from './search-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchAPageRoutingModule
  ],
  declarations: [SearchAPage]
})
export class SearchAPageModule {}
