import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
   public index:number;
  @Output() public pick:EventEmitter<number>=new EventEmitter<number>();
  @Input('result')result : number;	
  constructor() { }

  ngOnInit() {
    this.index=0;
  }
  inre(){
    this.index++;
    this.pick.emit(this.index);
  }
  decr(){
    this.index--;
    this.pick.emit(this.index);
  }
}
