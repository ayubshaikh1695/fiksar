import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiksarLogoComponent } from './fiksar-logo/fiksar-logo.component';
import { NavsComponent } from './navs/navs.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [FiksarLogoComponent, NavsComponent, SearchComponent, NavbarComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [FiksarLogoComponent, NavsComponent, SearchComponent, NavbarComponent, HeaderComponent]
})
export class ComponentsModule { }
