import {Component, OnInit} from '@angular/core';
import {CountryService} from '../country.service';
import {Covid19} from '../covid19';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  covid19Statistics?: Covid19[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCovid19Statistics();

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getCovid19Statistics();
    });
  }

  getCovid19Statistics(): void {
    const code = String(this.route.snapshot.paramMap.get('code'));
    this.countryService.getCovid19Detail(code)
      .subscribe(covid19Details => this.covid19Statistics = covid19Details);
  }
}
