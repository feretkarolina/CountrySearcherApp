import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  selectedCountry?: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }

  getCountries(): void {
    this.countries = this.countryService.getCountries();
  }
}
