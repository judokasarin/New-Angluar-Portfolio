import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ContainerLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
