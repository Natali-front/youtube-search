import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './services/search.service';
import { Video } from './search/search.component';
import { FavoritesService } from './services/favorites.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


export interface Favorite {
  id: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  faHouse = faHouse
  videos: Video[] = []
  favorites: Favorite[] = []


  constructor(public searchService: SearchService, public favoriteService: FavoritesService) {
  }

  ngOnInit() {
  }
  // updateVideos(video: Video) {
  //   this.videos.push(video)
  // }
  // updateFavorites(favorite: Favorite) {
  //   this.favorites.unshift(favorite)
  // }
  // deleteFav(event: any) {
  //   this.favoriteService.deleteAllFavorites().subscribe(() => {
  //     this.favorites.splice(0, this.favorites.length)
  //   })
  // }
  // moveElem(event: any) {
  //   this.favoriteService.moveElemFav().subscribe(() => {
  //     this.favorites.splice(this.favorites.indexOf(event), 1)
  //   })
  // }

  // moveDown(event:any) {
  //   this.favoriteService.moveElemDown().subscribe(()=> {
  //      let index = this.favorites.indexOf(event)
  //     if (index < this.favorites.length) {
  //       this.favorites.splice(index, 1)
  //       this.favorites.splice(index + 1, 0, event)
  //     }
  //     if (index === this.favorites.length) {
  //       return
  //     }
  //   })
     
    
  // }
  // moveUp(event:any) {
  //   console.log(this.favorites)
  //   this.favoriteService.moveElemUp()
  //   this.favoriteService.moveElemUp().subscribe(() => {
  //     let index = this.favorites.indexOf(event)
  //     if (index >= 1) {
  //       this.favorites.splice(index, 1)
  //       this.favorites.splice(index - 1, 0, event)
  //     } else {
  //       return
  //     }
  //   })
  // }
}



