import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Video } from '../search/search.component';


let amount = 9
let request: any 
// let nextPageToken: any 

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  videos: Video[] = [];
  event: any;
  

  constructor(private http: HttpClient) {

  }

  search(event: any): Observable<Video[]> {
    request = event.target.value
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=videoCount&maxResults=${amount}&type=video&key=${environment.apiKey}`)
  }

  paginate(nextPageToken: any): Observable<Video[]> {
   console.log(request)
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=${amount}&type=video&key=${environment.apiKey}&pageToken=${nextPageToken}`)
  }
};
