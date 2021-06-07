import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    CountriesComponent,
    CountryDetailsComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
