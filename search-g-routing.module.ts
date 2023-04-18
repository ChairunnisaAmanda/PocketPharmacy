import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchGPage } from './search-g.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchGPageRoutingModule {}
