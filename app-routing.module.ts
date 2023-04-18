import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'search-a',
    loadChildren: () => import('./search-a/search-a.module').then( m => m.SearchAPageModule)
  },
  {
    path: 'search-g',
    loadChildren: () => import('./search-g/search-g.module').then( m => m.SearchGPageModule)
  },
  {
    path: 'glucosamine',
    loadChildren: () => import('./glucosamine/glucosamine.module').then( m => m.GlucosaminePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
