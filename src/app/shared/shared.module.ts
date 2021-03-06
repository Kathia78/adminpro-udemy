import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [ CommonModule ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent],
  providers: [],
})
export class SharedModule {}
