import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
