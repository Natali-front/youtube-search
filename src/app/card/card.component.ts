import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../search/search.component';
import { faHeart, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from '../services/favorites.service';
import { SearchService } from '../services/search.service';
import { Favorite } from '../services/favorites.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  faHeart = faHeart
  faExpand = faExpand
  @Input() video!: Video
  @Output() onAdd: EventEmitter<Favorite> = new EventEmitter<Favorite>()
  favorites: Favorite[] = []
 

  constructor(public favoriteService: FavoritesService, private searchService: SearchService, private router: Router) {

  }
  addFavorite(event:any) {
    this.favoriteService.addFavoriteElem(event.path[2].id)
      const favorite: Favorite = {
        id: event.path[2].id
      }
      this.onAdd.emit(favorite)
  }
  addInfo(event:any){
    this.searchService.openInfo(event)
  }
  ngOnInit(): void {
  }

};
