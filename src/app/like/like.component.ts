import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likes-count') likesCount : number;
  @Input('is-liked') isLiked: boolean;

  onLiked(){
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1:  - 1;
  }
}
