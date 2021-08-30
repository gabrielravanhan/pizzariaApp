import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrogonofePageRoutingModule } from './estrogonofe-routing.module';

import { EstrogonofePage } from './estrogonofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstrogonofePageRoutingModule
  ],
  declarations: [EstrogonofePage]
})
export class EstrogonofePageModule {}
