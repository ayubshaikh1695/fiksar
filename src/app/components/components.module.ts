import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiksarLogoComponent } from './fiksar-logo/fiksar-logo.component';



@NgModule({
  declarations: [FiksarLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [FiksarLogoComponent]
})
export class ComponentsModule { }
