import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end';

  peliculas = [{
    titulo : "Spider-man",
    fechaLanzamiento : new Date(),
    precio : 1899
  },
  {
    titulo : "Mohana",
    fechaLanzamiento : new Date("1/10/2010"),
    precio : 1899
  }]
}
