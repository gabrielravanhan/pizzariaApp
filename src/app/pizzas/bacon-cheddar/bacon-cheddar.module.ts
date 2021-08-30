import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaconCheddarPageRoutingModule } from './bacon-cheddar-routing.module';

import { BaconCheddarPage } from './bacon-cheddar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaconCheddarPageRoutingModule
  ],
  declarations: [BaconCheddarPage]
})
export class BaconCheddarPageModule {}
