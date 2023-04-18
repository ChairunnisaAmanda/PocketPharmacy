import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlucosaminePageRoutingModule } from './glucosamine-routing.module';

import { GlucosaminePage } from './glucosamine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlucosaminePageRoutingModule
  ],
  declarations: [GlucosaminePage]
})
export class GlucosaminePageModule {}
