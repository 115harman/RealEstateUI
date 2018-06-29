import { Component, OnInit } from '@angular/core';
import { LookupService } from 'src/app/services/lookup.service';
import { PropertyService } from 'src/app/services/property.service';
import { ValidBeds } from 'src/app/models/valid_beds';
import { ValidBaths } from 'src/app/models/valid_baths';
import { ValidPriceDictionaries } from 'src/app/models/valid_price_dictionaries';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PropertySearchFilter } from 'src/app/models/property-search-filter';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

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
    private _activatedRoute: ActivatedRoute
  ) {
      const keywords = this._activatedRoute.snapshot.queryParams['keywords'];
      const bedCount = this._activatedRoute.snapshot.queryParams['bedCount'];
      const bathCount = this._activatedRoute.snapshot.queryParams['bathCount'];
      let minPrice = this._activatedRoute.snapshot.queryParams['minPrice'];
      minPrice = (minPrice == undefined || isNaN(minPrice) ? this.minPriceLimit : minPrice);
      let maxPrice = this._activatedRoute.snapshot.queryParams['maxPrice'];
      maxPrice = (maxPrice == undefined || isNaN(maxPrice) ? this.maxPriceLimit : maxPrice);
      this.filter = new PropertySearchFilter(
        keywords,
        bedCount,
        bathCount,
        minPrice,
        maxPrice
      );
  }

  ngOnInit() {
    var f = this._activatedRoute.parent.paramMap.pipe(
    );

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

}
