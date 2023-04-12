import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  @Input()
  employeeName!: string;

  @Input()
  employeeObj !: any;

  ngOnInit():void{
    console.log("Data from Parent " + JSON.stringify(this.employeeObj));
    
  }
}

