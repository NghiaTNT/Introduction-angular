import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public name = "";
  public password = "";
  public vehicles = ['Toyota', 'Honda', 'Mitsubishi', 'Ford', 'Bentley'];
  private selectedVehicle = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if (this.selectedVehicle === '') {
      this.selectedVehicle = this.vehicles[0];
    }
    console.log("onSubmit");
    console.log('name = ' + this.name);
    console.log('password = ' + this.password);
    console.log('vehicle = ' + this.selectedVehicle);
  }

  public selectVehicle(event: any) {
    this.selectedVehicle = event.target.value;
  }

}
