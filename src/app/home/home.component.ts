import { Component, OnInit } from '@angular/core';
import { LookupService } from 'src/app/services/lookup.service';
import { ValidBeds } from 'src/app/models/valid_beds';
import { ValidBaths } from 'src/app/models/valid_baths';
import { ValidPriceDictionaries } from 'src/app/models/valid_price_dictionaries';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';
import { PropertySearchFilter } from 'src/app/models/property-search-filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  validBeds: ValidBeds[];
  validBaths: ValidBaths[];
  validPriceDictionaries: ValidPriceDictionaries[];
  priceDictionaryRange: number[] = [25, 75];
  minPriceLimit = 0;
  maxPriceLimit = 100000;
  filter: PropertySearchFilter;

  constructor(
    private _lookupService: LookupService,
    private _propertyService: PropertyService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._lookupService
      .validBeds()
      .subscribe(result => {
        this.validBeds = result;
      });

    this._lookupService
      .validBaths()
      .subscribe(result => {
        this.validBaths = result;
      });

    this._lookupService
      .validPriceDictionaries()
      .subscribe(result => {
        this.validPriceDictionaries = result;
      });

      this.filter = new PropertySearchFilter(null,null,null,25000,75000);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSubmit(filter: any) {
    //var filter = JSON.stringify(filterObj);
    this._router.navigate(['/property/search/list'], { queryParams: filter });
  }
}
