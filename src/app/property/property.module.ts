import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { SearchComponent } from 'src/app/property/search.component';
import { ListSearchComponent } from 'src/app/property/list-search/list-search.component';
import { MapSearchComponent } from 'src/app/property/map-search/map-search.component';
import { PropertyService } from 'src/app/services/property.service';
import { LookupService } from 'src/app/services/lookup.service';

const routes: Routes = [
  {
    path: 'search', component: SearchComponent,
    children: [
      { path: 'list', component: ListSearchComponent },
      { path: 'map', component: MapSearchComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [SearchComponent, ListSearchComponent, MapSearchComponent],
  providers: [ PropertyService, LookupService ]
})
export class PropertyModule { }
