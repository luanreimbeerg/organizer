import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BtnComponent } from './btn.component';

@NgModule({
  imports: [CommonModule],
  exports: [BtnComponent],
  declarations: [BtnComponent],
})
export class BtnModule {}
