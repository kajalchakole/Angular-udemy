import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  courses = [
    { id: 1 , name : "Java" },
    { id : 2, name : "C"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
