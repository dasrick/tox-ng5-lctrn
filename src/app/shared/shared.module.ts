import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutSimpleComponent } from './layout-simple/layout-simple.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

// services
import { SidenavService } from './sidenav/sidenav.service';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';

// modules
import { MaterialComponentsModule } from '../material-components.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollbarModule } from './scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    ScrollbarModule
  ],
  declarations: [
    LayoutSimpleComponent,
    LayoutAdminComponent,
    SidenavComponent,
    SidenavItemComponent,
  ],
  providers: [
    SidenavService,
    BreadcrumbService,
  ]
})
export class SharedModule { }
