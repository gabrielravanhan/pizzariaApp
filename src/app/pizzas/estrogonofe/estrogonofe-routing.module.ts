import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstrogonofePage } from './estrogonofe.page';

const routes: Routes = [
  {
    path: '',
    component: EstrogonofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstrogonofePageRoutingModule {}
