import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Video } from '../search/search.component';
import {faHeart} from '@fortawesome/free-solid-svg-icons';


export interface Favorite {
  id:any
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  faHeart = faHeart
  @Input() video!: Video
  @Output() onAdd: EventEmitter<Favorite> = new EventEmitter<Favorite>()
  favorites: Favorite[] = JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
  

  
  constructor(private searchService: SearchService) {

  }
  ngOnInit(): void {

  }
 saveToLocalStorage(event: any) {
    console.log(event)
    let favoriteElement = event.path[2].id
    console.log(favoriteElement)
    let favorites = JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
    favorites.unshift(favoriteElement)
    localStorage.setItem('myFavoriteList', JSON.stringify(favorites))
    favorites.map((item: any) => {
      const favorite = {
        id: item
      }
      console.log(favorite)
      this.onAdd.emit(favorite)
    })
  }

  // updateFavorites(favorite: Favorite) {
  //   this.favorites.unshift(favorite)
  //   console.log(this.favorites)
  // }
};
