import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Favorite } from '../app.component';
import { FavoritesService } from '../services/favorites.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorites: Favorite[] = []
 @Output() onDelete: EventEmitter<Favorite> = new EventEmitter<Favorite>()
 
  constructor(public favoriteService: FavoritesService) { }

  ngOnInit(): void {
  }
  delete(){
      this.favoriteService.deleteAllFavorites()
        this.onDelete.emit() 
  }
  }




