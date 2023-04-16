import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, SimpleChanges, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';


@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  @Input()
  titulo: string;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent

  timer: ReturnType<typeof setInterval>;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }
  ngOnDestroy(): void {
      
    console.log('OnDestroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
      
    console.log('OnDoCheck');
  }
  ngAfterViewInit(): void {
      
    console.log('OnAfterViewInt');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.timer = setInterval(()=> console.log(new Date()),1000);
  }

}
