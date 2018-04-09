import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {

  form;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      name : ['', Validators.required],
      contact : fb.group({
        phone : [],
        email : fb.control([])
      }),
      topics : fb.array([])
    });
  }

  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic : FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
