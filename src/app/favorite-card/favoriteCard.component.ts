import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Favorite } from '../app.component';
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
 deleteOne(event:any){
    this.favoriteService.deleteFavoriteElem(event).subscribe(() => {
    this.onMove.emit(this.favorite)
    })
 }
 moveUp(event:any){
  this.favoriteService.moveElemUp().subscribe(() => {
  this.onUp.emit(this.favorite)
  })
  
}
 moveDown(event:any){
  this.favoriteService.moveElemDown().subscribe(() => {
  this.onDown.emit(this.favorite)
  })
 }
}



