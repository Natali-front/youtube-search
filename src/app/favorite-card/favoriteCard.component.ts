import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {faCircleArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export interface Favorite {
  id:number
}

@Component({
  selector: 'app-favoriteCard',
  templateUrl: './favoritecard.component.html',
  styleUrls: ['./favoritecard.component.scss']
})
export class FavoriteCardComponent {
  @Input() favorite!:Favorite
  @Output() onAdd: EventEmitter<Favorite> = new EventEmitter<Favorite>()
  favorites: Favorite[] = JSON.parse(localStorage.getItem('myFavoriteList') || '[]')

  
  faCircleArrowDown = faCircleArrowDown
  faCircleArrowUp = faCircleArrowUp
  faTrash = faTrash
  


}
