import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';
import {Country} from '../country';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  countries?: Country[];
  searchBy = 'name';
  searchValue?: string;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(value: string): void {
    this.searchValue = value;
    this.countryService.getCountries(this.searchBy, value)
      .subscribe(countries => this.countries = countries);
  }

  selectSearchBy(searchBy: string): void {
    this.searchBy = searchBy;
  }
}
