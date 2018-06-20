import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { LookupService } from 'src/app/services/lookup.service';

const routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [ LookupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
