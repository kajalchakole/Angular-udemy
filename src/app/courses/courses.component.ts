import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  colSpan = 2;
  isActive = true;
  title ="List of Courses";
  imageUrl = "http://lorempixel.com/400/200";
  email = "me@gmail.com";

  constructor() { }

  course = {
    title : "The complete angular course",
    rating : 4.9753,
    students : 30123,
    price : 190.34,
    releaseDate : new Date(2016, 3, 1),
    summaryText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }

  onSave() {
    console.log("button was clicked");
  }

  onCancel($event) {
    console.log($event);
    $event.stopPropagation();
  }

  onDivClick($event) {
    console.log("Div was clicked");
  }

  onKeyUp(email){
    console.log(email);
  }

  onKeyEnter(){
    console.log(this.email);
    
  }

}
