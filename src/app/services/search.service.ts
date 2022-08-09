import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Video } from '../search/search.component';
import { OpenedVideo } from '../video-page/video-page.component'


let amount = 9
let videoId: any
let request: any

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  videos: Video[] = [];
  event: any;
  chosenVideos: OpenedVideo[] = []
  

  constructor(private http: HttpClient) {

  }

  search(event: any): Observable<Video[]> {
    request = event.target.value
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=videoCount&maxResults=${amount}&type=video&key=${environment.apiKey}`)
  }

  paginate(nextPageToken: any): Observable<Video[]> {
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=${amount}&type=video&key=${environment.apiKey}&pageToken=${nextPageToken}`)
  }
  openInfo(event:any): Observable<Video[]> {
    videoId = event.target.value
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${environment.apiKey}`)
  }
}
