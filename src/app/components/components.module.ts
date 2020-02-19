import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiksarLogoComponent } from './fiksar-logo/fiksar-logo.component';
import { NavsComponent } from './navs/navs.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [FiksarLogoComponent, NavsComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [FiksarLogoComponent, NavsComponent]
})
export class ComponentsModule { }
