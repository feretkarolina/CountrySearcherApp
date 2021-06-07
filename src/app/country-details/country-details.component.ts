import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  selectedCountry?: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const country = String(this.route.snapshot.paramMap.get('country'));
    this.countryService.getCountry(country)
      .subscribe(countries => this.selectedCountry = countries[0]);
  }
}
