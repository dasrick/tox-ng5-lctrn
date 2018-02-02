import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LayoutSimpleComponent } from './shared/components/layout-simple/layout-simple.component';
import { LayoutAdminComponent } from './shared/components/layout-admin/layout-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutSimpleComponent,
    LayoutAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
