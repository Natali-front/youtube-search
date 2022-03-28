import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { Video } from './search/search.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  videos: Video[] = []

  constructor(public searchService: SearchService) {

  }

  ngOnInit() {

  }
  updateVideos(video: Video) {
    this.videos.push(video)
  }

};
