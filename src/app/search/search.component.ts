import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';


export interface Video {
  id: number
  videoId: any
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  @Output() onAdd: EventEmitter<Video> = new EventEmitter<Video>()

  videos: Video[] = []
  event: any;
  response: any;
  videoId: any;


  constructor(public searchService: SearchService) {

  }
  ngOnInit(): void {

  }
  search(event: any) {
    this.searchService.search(event)
      .subscribe((response) => {
        this.response = response
        this.videos = this.response.items.map((item: any) => {
          const video = {
            id: this.response.items.indexOf(item) + 1,
            videoId: item.id.videoId
          }
          this.onAdd.emit(video)
        })
      })
  }
};
