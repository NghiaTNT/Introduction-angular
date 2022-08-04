import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Nghĩa Nguyễn';
  public age = 16;
  public vehicles = ['Toyota', 'Honda', 'Mitsubishi'];

  constructor(private common: CommonService) {
    this.age = common.age;
  }

  tangTuoi(): void {
    this.common.age++;
    this.age = this.common.age;
  }

  giamTuoi(): void {
    this.common.age--;
    this.age = this.common.age;
  }

  ngOnInit(): void {
  }

}
