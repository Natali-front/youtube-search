import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../search/search.component';
import { Favorite } from '../app.component';
import { FavoritesService } from '../services/favorites.service';

let a

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  // video: Video[]=[]
  favorites: Favorite[]=[]
  @Input() video!: Video
  @Input() favorite!: Favorite
  constructor(private route: ActivatedRoute,
    private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      console.log(params['id'])
      this.video = params['id']
      // this.video = this.favoriteService.getById(params['id'])
      
    })
  } 

}
