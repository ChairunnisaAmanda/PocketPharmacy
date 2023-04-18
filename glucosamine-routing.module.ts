import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucosaminePage } from './glucosamine.page';

const routes: Routes = [
  {
    path: '',
    component: GlucosaminePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucosaminePageRoutingModule {}
