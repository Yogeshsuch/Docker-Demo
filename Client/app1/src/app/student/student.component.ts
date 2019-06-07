import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  rollNo;
  name;
  mark;

  constructor(private studentService:StudentService) { }

  onSubmit(){
    this.studentService
    .post(this.rollNo,this.name,this.mark)
    .subscribe(data=>{
        console.log(data);
    })
  }

  ngOnInit() {
  }

}
