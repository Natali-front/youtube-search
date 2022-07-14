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
      observer.next()
    })
    return deleteFavoriteObservable
  }
  moveElemFav() {
    const moveElemFavObservable = new Observable((observer) => {
      observer.next()
    })
    return moveElemFavObservable
  }
  deleteAllFavorites() {
    const deleteAllObservable = new Observable((observer) => {
      observer.next()
    })
    return deleteAllObservable
  }
  moveElemUp() {
    const moveElemFavObservable = new Observable((observer) => {
      observer.next()
    })
    return moveElemFavObservable
  }
  moveElemDown() {
    const moveElemFavObservable = new Observable((observer) => {
      observer.next()
    })
    return moveElemFavObservable
  }
}
