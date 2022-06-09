import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Video } from '../search/search.component';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  videos: Video[] = [];
  event: any;
  


  constructor(private http: HttpClient) {

  }

  search(event: any): Observable<Video[]> {
    const request = event.target.value
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=videoCount&maxResults=18&type=video&key=${environment.apiKey}`)
  }
};
