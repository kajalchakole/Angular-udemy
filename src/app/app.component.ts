import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title', 
    isFavorite: false
  }

  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: false,
    likesCount: 10
  }

  task = {
    title : 'Review Application',
    assignee : null
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite changed ", eventArgs.newValue);
  }

  courses = [
    { name: "course1", id: 1},
    { name: "course2", id: 2},
    { name: "course3", id: 3}
  ];
  mode = 'other';

  onAdd(){
    this.courses.push({id:4, name:"course4"});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course){
    course.name = "updated";
  }

  loadCourses(){
    this.courses = [
      { name: "course1", id: 1},
      { name: "course2", id: 2},
      { name: "course3", id: 3}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
