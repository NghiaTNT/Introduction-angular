import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { Student } from '../models/Student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.serverHttp.getStudents().subscribe((data) => {
      console.log('getStudents ', data);
      this.students = data;
      this.common.setTotalStudents(data.length);
    });
  }

  public addStudent() {
    this.router.navigate(['/student-form', 0]);
  }

  public delStudent(studentId: any) {
    console.log('student ' + studentId);
    // ??? Vì sao phải dùng Subscribe
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      console.log('data ' + data)
      this.loadData();
    });
  };

  public editStudent(studentId: any) {
    this.router.navigate([`/student-form/${studentId}`]);
  }
}
