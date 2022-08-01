import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../search/search.component';
import { Favorite } from '../app.component';
import { SearchService } from '../services/search.service';

export interface OpenedVideo {
  title: any,
  date: any,
  id: any
}

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  title: any
  date: any
  chosenVideos: OpenedVideo[] = []
  favorites: Favorite[] = []
  @Input() video!: Video
  @Input() favorite!: Favorite
  @Input() chosenVideo!: OpenedVideo

  constructor(private route: ActivatedRoute,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.chosenVideo = params['id']
      this.searchService.openInfo(this.chosenVideo).subscribe((result: any) => {
        console.log(result)
        const chosenVideo: OpenedVideo = {
          title: result.items[0].snippet.localized.title,
          date: result.items[0].snippet.publishedAt,
          id: result.items[0].id
        }
        this.title = chosenVideo.title
        this.date = chosenVideo.date
      })
    })
  }
}
