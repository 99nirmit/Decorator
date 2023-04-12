import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  childData : string = "Data from child component";

  @Output() childStringData = new EventEmitter<string>();

  sendData(){
    this.childStringData.emit(this.childData);
  }

}
