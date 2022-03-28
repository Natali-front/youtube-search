import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Video } from '../search/search.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() video!: Video


  constructor(private searchService: SearchService) {

  }
  ngOnInit(): void {

  }

};
