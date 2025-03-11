import { DatePipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListatoPeliculaComponent } from "./peliculas/listato-pelicula/listato-pelicula.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListatoPeliculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {


}
