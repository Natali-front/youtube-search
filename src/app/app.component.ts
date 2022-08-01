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
}



