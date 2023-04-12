import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component {

  childDataRecived : string ="";
  RecivedData($event:string){
    this.childDataRecived = $event;
  }
}
