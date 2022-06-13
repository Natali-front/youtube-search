import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Favorite } from '../app.component';
import { FavoritesService } from '../services/favorites.service';



@Component({
  selector: 'app-favoriteCard',
  templateUrl: './favoritecard.component.html',
  styleUrls: ['./favoritecard.component.scss']
})
export class FavoriteCardComponent implements OnInit {
  @Input() favorite!: Favorite
  @Output() onAdd: EventEmitter<Favorite> = new EventEmitter<Favorite>()
  favorites: Favorite[] = []

  faCircleArrowDown = faCircleArrowDown
  faCircleArrowUp = faCircleArrowUp
  faTrash = faTrash
  constructor(public favoriteService: FavoritesService) {
  }
  deleteFavorite() {


  }
  ngOnInit() {
  }

}



