import {Component, Input, OnInit} from '@angular/core';
import { Country } from '../country';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() searchBy?: string;
  @Input() searchValue?: string;
  @Input() countries?: Country[];
  selectedCountry?: Country;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }
}
