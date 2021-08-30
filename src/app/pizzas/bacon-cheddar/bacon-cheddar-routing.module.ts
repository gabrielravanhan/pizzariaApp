import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaconCheddarPage } from './bacon-cheddar.page';

const routes: Routes = [
  {
    path: '',
    component: BaconCheddarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaconCheddarPageRoutingModule {}
