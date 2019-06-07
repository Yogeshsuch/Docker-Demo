import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students = [];

  constructor(private studentService:StudentService) { this.getData() }

  getData(){
    this.studentService
    .get()
    .subscribe(data=>{
      const body = data.json();
      this.students = body;
    })
  }

  ngOnInit() {
  }

}
