import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { CountryService } from '../country.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  selectedCountry?: Country;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountry();

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getCountry();
    });
  }

  getCountry(): void {
    const code = String(this.route.snapshot.paramMap.get('code'));
    this.countryService.getCountryByCode(code)
      .subscribe(country => this.selectedCountry = country);
  }
}
