import { Component, OnInit, Input } from '@angular/core';
import { COUNTRIES } from '../mock-countries';
import { Country } from '../country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countries = COUNTRIES;
  @Input() selectedCountry?: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
