import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Favorite } from '../services/favorites.service';
import { FavoritesService } from '../services/favorites.service';



@Component({
  selector: 'app-favoriteCard',
  templateUrl: './favoriteCard.component.html',
  styleUrls: ['./favoriteCard.component.scss']
})
export class FavoriteCardComponent implements OnInit {
  favorites: Favorite[] = []
  @Input() favorite!: Favorite
  @Output() onMove: EventEmitter<any> = new EventEmitter<any>()
  @Output() onUp: EventEmitter<any> = new EventEmitter<any>()
  @Output() onDown: EventEmitter<any> = new EventEmitter<any>()


  faCircleArrowDown = faCircleArrowDown
  faCircleArrowUp = faCircleArrowUp
  faTrash = faTrash
  constructor(public favoriteService: FavoritesService) {
  }

  ngOnInit() {
   
  }
  deleteOne(event:any) {
    this.favoriteService.deleteAllFavorites()
    this.onMove.emit(this.favorite)
  }
  moveUp(event:any) {
    this.favoriteService.moveElemUp(event)
    this.onUp.emit(this.favorite)
  }
  moveDown(event:any) {
    this.favoriteService.moveElemDown(event)
     this.onDown.emit(this.favorite) 
  }
}



