import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../card/card.component';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Favorite[] = []
  constructor() { }

  addFavoriteElem(event: any) {
    const favoriteObservable = new Observable((observer) => {
      observer.next(event.path[2].id)
    })
    return favoriteObservable
  }
  deleteFavoriteElem(event: any) {
    const deleteFavoriteObservable = new Observable((observer) => {
      observer.next(event.path[2].id)
    })
    return deleteFavoriteObservable
  }
  moveElemUp() {

  }
  moveElemDown() {

  }
  deleteAllFavorites() {
    if (this.favorites.length > 0) {

    }
    return
  }
}
