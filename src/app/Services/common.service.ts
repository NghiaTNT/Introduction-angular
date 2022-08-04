import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 17;
  constructor() { }

  public tangTuoi() {
    this.age++;
  }

  public totalStudents = 0;
  public totalStudentsBehav = new BehaviorSubject<number>(0);

  // Main purpose of method: to spread value of object typeof BehaviorSubject, which is a copy of totalStudents
  // Property totalStudents to storage value, property totalStudentsBehav to spread value.
  public setTotalStudents(total: number) {
    this.totalStudents = total;
    this.totalStudentsBehav.next(total);
    console.log('total = ' + total);
  }

  public incrementStudent() {
    this.totalStudents++;
    this.totalStudentsBehav.next(this.totalStudents);
  }

  // public setTotalStudents(total: number) {
  //   this.totalStudents = total;
  //   this.totalStudents$.next(total);
  // }

  // public increamentStudent() {
  //   this.totalStudents++;
  //   this.totalStudents$.next(this.totalStudents);
  // }
}
