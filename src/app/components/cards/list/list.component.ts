import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(http: HttpClient) {
    http 
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(photo => this.photos = photo)
  }

  photos: Object[] = [];

  ngOnInit(): void {
  }
}
