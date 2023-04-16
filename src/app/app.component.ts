import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculasEnCines =  [{
        titulo : "Spider-man",
        fechaLanzamiento : new Date(),
        precio : 1899.04
      },
      {
        titulo : "Mohana",
        fechaLanzamiento : new Date("2012-10-14"),
        precio : 245.99
      }];

      this.peliculasProximosEstrenos=[{
        titulo : "Avenger: Endgams",
        fechaLanzamiento : new Date(),
        precio : 212.54
      },
      {
        titulo : "Inception",
        fechaLanzamiento : new Date("2016-11-14"),
        precio : 323.45
      },
      {
        titulo : "Rocky",
        fechaLanzamiento : new Date("2016-02-15"),
        precio : 232.43
      }]
    },1000);

    
   
  }
  title = 'Front-end';

  peliculasEnCines;
  peliculasProximosEstrenos;
}
