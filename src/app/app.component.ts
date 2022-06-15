import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './services/search.service';
import { Video } from './search/search.component';
import { FavoritesService } from './services/favorites.service';


export interface Favorite {
  id: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  videos: Video[] = []
  favorites: Favorite[] = []

  constructor(public searchService: SearchService, public favoriteService: FavoritesService) {
  }

  ngOnInit() {
  }
  updateVideos(video: Video) {
    this.videos.push(video)
  }
  updateFavorites(favorite: Favorite) {
    this.favorites.unshift(favorite)
  }
  deleteFavorite(event: any) {
    if (event.target.className === 'btn-delete') {
      this.favoriteService.deleteFavoriteElem(event).subscribe(() => {
        let elem: any = this.favorites.find(item => item.id == event.target.id)
        this.favorites.splice(this.favorites.indexOf(elem), 1)
      })
    } else {
      return
    }
  }
  deleteAll(event: any) {
    if (event.target.id === "delete-all-favorite") {
      this.favoriteService.deleteAllFavorites().subscribe(() => {
        this.favorites.splice(0, this.favorites.length)
      })
    } else {
      return
    }
  }
  moveElem(event: any) {
    if (event.target.classList.contains("fa-circle-arrow-down") && event.path[1].id) {
      this.favoriteService.moveElemFav().subscribe(() => {
        let elem: any = this.favorites.find(item => item.id === event.path[1].id)
        let index = this.favorites.indexOf(elem)
        if (index < this.favorites.length) {
          this.favorites.splice(index, 1)
          this.favorites.splice(index + 1, 0, elem)
        }
        if (index === this.favorites.length) {
          return
        }
      })
    }
    if (event.target.classList.contains("fa-circle-arrow-up") && event.path[1].id) {
      this.favoriteService.moveElemFav().subscribe(() => {
        let elem: any = this.favorites.find(item => item.id == event.path[1].id)
        let index = this.favorites.indexOf(elem)
        if (index >= 1) {
          this.favorites.splice(index, 1)
          this.favorites.splice(index - 1, 0, elem)
        } else {
          return
        }
      })
    }
  }
};
