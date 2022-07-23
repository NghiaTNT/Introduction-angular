import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Nghĩa Nguyễn';
  public age = 22;
  public vehicles = ['Toyota', 'Honda', 'Mitsubishi'];

  constructor() { }

  ngOnInit(): void {
  }

}
