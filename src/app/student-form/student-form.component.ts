import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  public id = 0;
  public name: any;

  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    img: new FormControl(''),
  });

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // if id > 0 => load data
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id: number) {
    this.serverHttp.getStudent(id).subscribe((data) => {
      console.log(data);
      for (const controlName in this.studentForm.controls) {
        this.studentForm.controls[controlName as keyof typeof this.studentForm.controls].setValue(data[controlName]);
      }
    })
  }

  private generateNewStudent() {
    const newStudent: Student = {
      id: '',
      code: '',
      gender: '',
      firstName: '',
      lastName: '',
      dob: new Date(),
      email: '',
      phone: '',
      img: '',
    };
    for (const controlName in this.studentForm.controls) {
      if (controlName) {
        newStudent[controlName as keyof Student] = this.studentForm.controls[
          controlName as keyof typeof this.studentForm.controls
        ].value as string & Date;
      }
    }

    return newStudent as Student;
  }

  public saveAndGoToList() {
    if (this.id > 0) {
      this.serverHttp.modifyStudent(this.id, this.generateNewStudent()).subscribe((data) => {
        this.router.navigate(['/students']);
      });
    } else {
      this.serverHttp.addStudent(this.generateNewStudent()).subscribe((data) => {
        this.router.navigate(['/students']);
      });
    }
  }

  public saveAndAgain() {
    if (this.id > 0) {
      this.serverHttp.modifyStudent(this.id, this.generateNewStudent()).subscribe((data) => {
        //
      });
    } else {
      this.serverHttp.addStudent(this.generateNewStudent()).subscribe((data) => {
        this.common.incrementStudent();
        this.studentForm.reset();
      });
    }
  }
}
