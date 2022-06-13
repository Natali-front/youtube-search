import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './services/search.service';
import { Video } from './search/search.component';


export interface Favorite {
  id:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  videos: Video[] = []
  favorites: Favorite[] = []
  


  constructor(public searchService: SearchService) {
  }

  ngOnInit() {
  }
  updateVideos(video: Video) {
    this.videos.push(video)
  }
  updateFavorites(favorite: Favorite) {
    this.favorites.unshift(favorite)
  }
  
};
