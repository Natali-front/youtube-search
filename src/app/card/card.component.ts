import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Video } from '../search/search.component';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  faHeart = faHeart
  @Input() video!: Video

  
  constructor(private searchService: SearchService) {

  }
  ngOnInit(): void {

  }

};
