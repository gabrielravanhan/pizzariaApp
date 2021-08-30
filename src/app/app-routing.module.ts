import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bacon-cheddar',
    loadChildren: () => import('./pizzas/bacon-cheddar/bacon-cheddar.module').then( m => m.BaconCheddarPageModule)
  },
  {
    path: 'estrogonofe',
    loadChildren: () => import('./pizzas/estrogonofe/estrogonofe.module').then( m => m.EstrogonofePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
