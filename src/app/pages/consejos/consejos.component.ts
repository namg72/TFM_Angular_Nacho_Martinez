import { Component, OnInit } from '@angular/core';
import { Video } from 'src/interfaces/video.interface';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {
[x: string]: any;

 datos:any

  constructor() { }


  


  ngOnInit() {

  

  fetch("../../../assets/video/videos.json")
  .then(resp => resp.json())
  .then(data => {

    this.datos=data


  })


  

  }

}
