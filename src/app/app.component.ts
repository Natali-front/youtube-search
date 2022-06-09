import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { Video } from './search/search.component';
import { Favorite } from './favorite-card/favoriteCard.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  @Input() favorite!:Favorite
  videos: Video[] = []
  favorites: Favorite[] = []

  saveToLocalStorage(event:any){
    let favoriteElement = event.path[2].id
    let favorites = JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
    favorites.unshift(favoriteElement)
    localStorage.setItem('myFavoriteList', JSON.stringify(favorites))
    console.log(favorites)
  }

  constructor(public searchService: SearchService) {

  }

  ngOnInit() {

  }
  updateVideos(video: Video) {
    this.videos.push(video)
  }

  updateFavorites(favorite: Favorite){
    this.favorites.push(favorite)
  }
};
