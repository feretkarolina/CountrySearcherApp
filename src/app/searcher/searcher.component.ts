import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  searchBy = 'name';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectSearchBy(searchBy: string): void {
    this.searchBy = searchBy;
  }

  search(value: string): void {
    this.router.navigate(['/countries', this.searchBy, value]);
  }
}
