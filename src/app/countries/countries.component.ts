import {Component, Input, OnInit} from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() countries?: Country[];
  selectedCountry?: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }
}
