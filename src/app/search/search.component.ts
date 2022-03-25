import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent{
  videos = [];
  userReq:string = '';
  response: any;
  
  
  constructor(private http: HttpClient) {

  }
     search(event:any) {
      event.preventDefault()
      const userReq = event.target.value
      const apiKey = 'AIzaSyDCFEcJp4-J6fZO6OGhg387fDsaIlDb90k'
      
         this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${userReq}&title=snippet&order=videoCount&maxResults=12&type=video&key=${apiKey}`)
      .subscribe((response) => {
        this.response = response
        this.videos = this.response.items.map((item:any) => item.id.videoId)
        }) 
      
      
        
      
  }

}
