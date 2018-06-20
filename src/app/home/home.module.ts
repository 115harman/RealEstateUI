import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { FlexLayoutModule } from "@angular/flex-layout";

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { LookupService } from 'src/app/services/lookup.service';


const routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    NouisliderModule,
    FlexLayoutModule
  ],
  declarations: [HomeComponent],
  providers: [LookupService]
})
export class HomeModule { }
