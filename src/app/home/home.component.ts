import { Component, OnInit } from '@angular/core';
import { LookupService } from 'src/app/services/lookup.service';
import { ValidBeds } from 'src/app/models/valid_beds';
import { ValidBaths } from 'src/app/models/valid_baths';
import { ValidPriceDictionaries } from 'src/app/models/valid_price_dictionaries';

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
  minPrice = 0;
  maxPrice = 100000;

  constructor(private _lookupService: LookupService) { }

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
