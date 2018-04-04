import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .fa{
      color : green;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite : boolean;
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickEvent(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue : this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs {
  newValue : boolean
}