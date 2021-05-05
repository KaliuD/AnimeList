import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {

  imgName:string;

  // @ViewChild('fileUpload') fileUpload:ElementRef;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    const file:File = event.target.files[0];
    if(file){
      this.imgName = file.name;
    }
  }

}
