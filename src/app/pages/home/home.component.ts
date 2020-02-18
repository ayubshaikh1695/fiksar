import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroImagePath = '../../../assets/images/kari-shea-207221.png';

  constructor() { }

  ngOnInit(): void {
  }

}
