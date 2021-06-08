import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Covid19} from './covid19';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = 'https://restcountries.eu/rest/v2';
  private covid19Url = 'https://api.covid19api.com/country';

  constructor(private http: HttpClient) { }

  getCountries(searchBy: string, value: string): Observable<Country[]> {
    if (!value.trim()) {
      return of([]);
    }
    return this.http.get<Country[]>(`${this.countriesUrl}/${searchBy}/${value}`);
  }

  getCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.countriesUrl}/alpha/${code}`);
  }

  getCovid19Detail(countryCode: string): Observable<Covid19[]> {
    const toDate = new Date();
    const fromDate = new Date();
    toDate.setDate(toDate.getDate() - 1);
    fromDate.setDate(fromDate.getDate() - 8);
    return this.http.get<Covid19[]>(`${this.covid19Url}/${countryCode}?from=${fromDate.getFullYear()}-${fromDate.getMonth() + 1}-${fromDate.getDate()}&to=${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`);
  }
}
