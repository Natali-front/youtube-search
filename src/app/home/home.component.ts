import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FavoritesService } from '../services/favorites.service';
import { Video } from '../search/search.component';
import { Favorite } from '../services/favorites.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  videos: Video[] = []
  favorites: Favorite[] = []

  constructor(public searchService: SearchService, public favoriteService: FavoritesService) { }

  ngOnInit(): void {
  }

  updateVideos(video: Video) {
    this.videos.push(video)
  }
  updateFavorites(favorite: Favorite) {
    this.favorites.unshift(favorite)
  }
  deleteFav() {
    this.favorites.splice(0, this.favorites.length)
  }
  moveElem(event:any) {
    this.favorites.splice(this.favorites.indexOf(event), 1)
  }

  moveDown(event:any) {
    let index = this.favorites.indexOf(event)
    if (index < this.favorites.length) {
      this.favorites.splice(index, 1)
      this.favorites.splice(index + 1, 0, event)
    }
    if (index === this.favorites.length) {
      return
    }
  }
  moveUp(event:any) {
    let index = this.favorites.indexOf(event)
    if (index >= 1) {
      this.favorites.splice(index, 1)
      this.favorites.splice(index - 1, 0, event)
    } else {
      return
    }
  }
}
