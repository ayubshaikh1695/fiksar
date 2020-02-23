import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-chips',
  templateUrl: './search-chips.component.html',
  styleUrls: ['./search-chips.component.scss']
})
export class SearchChipsComponent implements OnInit {
  chipsList = ['House Cleaning', 'Painting', 'Photography', 'Personal Training'];

  constructor() { }

  ngOnInit(): void {
  }

}
