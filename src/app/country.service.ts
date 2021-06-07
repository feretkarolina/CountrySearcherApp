import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = 'https://restcountries.eu/rest/v2';

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
}
