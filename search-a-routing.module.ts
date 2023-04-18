import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAPage } from './search-a.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAPageRoutingModule {}
