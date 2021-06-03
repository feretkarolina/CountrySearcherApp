import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/name';

  constructor(private http: HttpClient) { }

  getCountries(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countriesUrl}/${name}`);
  }
}
