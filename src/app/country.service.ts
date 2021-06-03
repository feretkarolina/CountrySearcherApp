import { Injectable } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './mock-countries';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/name/pol';

  constructor(private http: HttpClient) { }

  getCountries(): Country[] {
    // return this.http.get<Country[]>(this.countriesUrl);
    return COUNTRIES;
  }
}
