import { Injectable } from '@angular/core';


export interface Favorite {
  id: any
} 

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
   favorites: Favorite[] = []
  constructor() { }

  addFavoriteElem(event: any) {
    console.log(event)
      this.favorites.push(event)
  }
  deleteFavoriteElem(event: any) {
    this.favorites.splice(0, this.favorites.length)
  }
  moveElemFav(event:any) {
    this.favorites.splice(this.favorites.indexOf(event.id), 1)
  }
  deleteAllFavorites() {
    this.favorites.splice(0, this.favorites.length)
  }
  moveElemUp(event:any) {
      let index = this.favorites.indexOf(event.id)
      if (index >= 1) {
        this.favorites.splice(index, 1)
        this.favorites.splice(index - 1, 0, event.id)
      } else {
        return
      }
      console.log(this.favorites)
  }
  moveElemDown(event:any) {
    let index = this.favorites.indexOf(event.id)
    if (index < this.favorites.length) {
      this.favorites.splice(index, 1)
      this.favorites.splice(index + 1, 0, event.id)
    }
    if (index === this.favorites.length) {
      return
    }
  }
  getFavorite(){
    return this.favorites
  }
}
  


