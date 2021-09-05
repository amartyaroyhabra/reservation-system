import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { SearchFormComponent } from './search-form/search-form.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatModule } from './mat.module'

import { MatNativeDateModule } from '@angular/material/core';
import { RouteTripsComponent } from './route-trips/route-trips.component';
import { SeatsLayoutComponent } from './seats-layout/seats-layout.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component'
import { RouterModule,Routes } from '@angular/router'

const routes:Routes=[
  { path: '', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent}
]

@NgModule({
  declarations: [AppComponent, SearchFormComponent, RouteTripsComponent, SeatsLayoutComponent],

import { MatNativeDateModule } from '@angular/material/core'
import { RouteTripsComponent } from './route-trips/route-trips.component'
import { SeatsLayoutComponent } from './seats-layout/seats-layout.component'
import { TravellersComponent } from './travellers/travellers.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RouteTripsComponent,
    SeatsLayoutComponent,
    TravellersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatNativeDateModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
