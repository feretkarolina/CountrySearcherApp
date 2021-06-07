import {Component, OnInit} from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  searchBy?: string;
  searchValue?: string;
  countries?: Country[];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.searchBy = String(this.route.snapshot.paramMap.get('searchby'));
    this.searchValue = String(this.route.snapshot.paramMap.get('value'));
    this.countryService.getCountries(this.searchBy, this.searchValue)
      .subscribe(countries => this.countries = countries);
  }
}
