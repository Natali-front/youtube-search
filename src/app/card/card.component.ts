import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../search/search.component';
import { faHeart, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from '../services/favorites.service';


export interface Favorite {
  id: any
}
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

  constructor(public favoriteService: FavoritesService, private router: Router) {

  }
  addFavorite(event:any) {
    this.favoriteService.addFavoriteElem(event).subscribe((result: any) => {
      const favorite: Favorite = {
        id: result
      }
      this.favorites.push(favorite)
      this.onAdd.emit(favorite)
    })
  }
  ngOnInit(): void {
  }

};
