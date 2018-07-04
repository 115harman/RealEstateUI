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
import { SearchComponent } from './property/search.component';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

const routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'property', loadChildren: './property/property.module#PropertyModule' },
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
  providers: [ LookupService, HelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
